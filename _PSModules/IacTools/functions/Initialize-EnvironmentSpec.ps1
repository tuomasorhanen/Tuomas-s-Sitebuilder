function Initialize-EnvironmentSpec {
    [CmdletBinding()]
    param (
        # Module name
        [Parameter(Mandatory = $true)]
        [string]
        $Module,
        # Define Environment
        [Parameter(Mandatory = $true)]
        [string]
        $Environment,
        [Parameter(Mandatory = $true)]
        [string]
        $Location,
        # Subscription ID
        [Parameter(Mandatory = $true)]
        [string]
        $SubscriptionId,
        # Cold Run (aka. what-if)
        [Parameter(Mandatory = $true)]
        [boolean]
        $ColdRun
    )

    begin {
        $spec = $script:EnvironmentSpec
    }

    process {
        $spec.Module = $Module.ToLower()
        $spec.Environment = ($Environment).ToUpper()
        $spec.Location = ($Location).ToLower()
        $spec.SubscriptionId = $SubscriptionId
        $spec.ColdRun = $ColdRun
    }

    end {

    }
}
