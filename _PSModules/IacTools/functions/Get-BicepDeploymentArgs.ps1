<#
.SYNOPSIS
    Produces deployment arguments; Cold Run vs What If vs. Actual Deployment
.DESCRIPTION
    Produces --what-if in pipeline if $ColdRun is set, produces --confirm-with-what-if locally if $ColdRun is set
.NOTES
    Requires $global:ColdRun powershell variable to be set.
.LINK
    Specify a URI to a help page, this will show when Get-Help -Online is used.
.EXAMPLE
    PS> Initialize-EnvironmentSpec -Environment QA -Location we -SubscriptionId 'hello' -ColdRun $true
    PS> Get-BicepDeploymentArgs
    --what-if
#>
function Get-BicepDeploymentArgs {
    [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("PSUseSingularNouns", "")]
    [CmdletBinding()]
    [OutputType([String])]
    param ()

    begin {
        $spec = $script:EnvironmentSpec
        $isColdRun = $spec.ColdRun
        $isDevOpsBuild = [System.Convert]::ToBoolean($Env:TF_BUILD)
    }

    process {
        if ($isColdRun) {
            return '--what-if'
        }
        if ($isDevOpsBuild) {
            return ''
        }
        if (!$isDevOpsBuild) {
            return '--confirm-with-what-if'
        }
    }

    end {

    }
}
