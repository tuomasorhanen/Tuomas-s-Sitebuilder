<#
.SYNOPSIS
    Generates standards based names for deployments
.EXAMPLE
    PS> Get-DeploymentName -Module aks
    dep-aks-2022-09-27
#>
function Get-DeploymentName {
    [CmdletBinding()]
    param (
        # Module name
        [Parameter(Mandatory = $false)]
        [string]
        $Module,
        # Date
        [Parameter(Mandatory = $false)]
        [DateTime]
        $Date = (Get-Date)
    )

    begin {
        $spec = $script:EnvironmentSpec
        $deploymentName = $spec.Prefixes.Deployment
        if (!$Module) {
            $Module = $spec.Module
        }
    }

    process {
        $deploymentName += "-$($Module.ToLower())"
        $deploymentName += "-{0:yyyy-MM-dd}" -f ($Date)
        $deploymentName += "-{0:HH-mm-ss}" -f ($Date)
        $deploymentName
    }

    end {

    }
}
