<#
.SYNOPSIS
    Generates standards based resource group names
.EXAMPLE
    Get-ResourceGroupName
    rg

    Generates a resource group name for the subscription scope
.EXAMPLE
    Get-ResourceGroupName -Module
    rg-cache

    Generates a resource group name for the module scope
.EXAMPLE
    Get-ResourceGroupName -Module -Environment -Location
    rg-cache-qa-weu

    Generates a resource group name for the module, environment and location scope
#>
function Get-ResourceGroupName {
    [CmdletBinding()]
    param (
        # Use module name in the resource name
        [Parameter(Mandatory = $false)]
        [switch]
        $Module,
        # Use environment name in the resource name
        [Parameter(Mandatory = $false)]
        [switch]
        $Environment,
        # Use location in the resource name
        [Parameter(Mandatory = $false)]
        [switch]
        $Location
    )

    begin {
        $spec = $script:EnvironmentSpec
        $moduleName = $spec.Module
        $environmentName = $spec.Environment.ToLower()
        $locationName = $spec.Location
    }

    process {

        $rgName = $spec.Prefixes.ResourceGroup
        $rgName = "$rgName"

        if ($Module -eq $true) {
            $rgName = "$rgName-$moduleName"
        }

        if ($Environment -eq $true) {
            $rgName = "$rgName-$environmentName"
        }

        if ($Location -eq $true) {
            $abbreviation = Get-LocationAbbreviation -Location $locationName
            $rgName = "$rgName-$abbreviation"
        }
        return $rgName
    }

    end {

    }
}
