<#
.SYNOPSIS
    Deploys resource group to the current scope
.EXAMPLE
    Deploy-ResourceGroup -Name 'rg-my'
    Deploys resource group named rg-my into the current scope
.EXAMPLE
    Deploy-ResourceGroup
    Deploys resource group using naming convention.
    F.ex. if module=aks, environment=qa and location=westeurope
    deploys rg-aks-qa-weu
.EXAMPLE
    Deploy-ResourceGroup -Destroy
    Destroys a resource group using naming convention.
    F.ex. if module=aks, environment=qa and location=westeurope
    deletes rg-aks-qa-weu
#>
function Deploy-ResourceGroup {
    [CmdletBinding()]
    param (
        # Resource group name
        [Parameter(Mandatory = $false)]
        [string]
        $Name = (Get-ResourceGroupName -Module -Environment -Location),
        # Destroy instead of deploy
        [Parameter(Mandatory = $false)]
        [switch]
        $Destroy
    )

    begin {
        $spec = $script:EnvironmentSpec
        $location = $spec.Location
        $bicep = (Resolve-Path (Join-Path $PSScriptRoot '../bicep/rg.bicep')).Path

        #region Update tags instead of replace
        $script:existingTags = @{}
        & az group list --query '[].name' | ConvertFrom-Json | ForEach-Object {
            if ($_ -eq $Name) {
                $script:tags = (az group show --resource-group $Name --query tags | ConvertFrom-Json)
            }
        }
        $tags = Get-TagValues -Module -Environment -Bicep -MergeWith $script:existingTags
        #endregion

        $isDevOpsBuild = [System.Convert]::ToBoolean($Env:TF_BUILD)
    }

    process {
        if ($Destroy -eq $false) {
            & az deployment sub create (Get-BicepDeploymentArgs) `
                --location $location `
                --template-file $bicep `
                --parameters `
                name=$Name `
                location=$location `
                tags=$tags
        }
        else {
            # Print out resources to be deleted
            & az resource list --resource-group $Name --query '[].id' | ConvertFrom-Json | Format-List
            if ($isDevOpsBuild) {
                # Do not prompt for confirmation in CI
                & az group delete --name $Name --yes
            }
            else {
                # Locally, ensure this is really what we want to do.
                & az group delete --name $Name
            }
        }
    }

    end {

    }
}
