[CmdletBinding()]
param (
    [Parameter()]
    [string]
    $Environment
)

$Location = 'westeurope'
$SubscriptionId = '4a8b6bf8-1474-497c-95c8-094df7016840'

switch ($Environment) {
    'LOCAL' {
        @{
            SubscriptionId = $SubscriptionId
            Location       = $Location
            Debug          = $true
        }
    }
    'QA' {
        @{
            SubscriptionId = $SubscriptionId
            Location       = $Location
            Debug          = $false
        }
    }
    'PROD' {
        @{
            SubscriptionId = $SubscriptionId
            Location       = $Location
            Debug          = $false
        }
    }
    default {
        throw "Environment '$($Environment.ToUpper())' missing from config file (./.config.ps1)"
    }
}
