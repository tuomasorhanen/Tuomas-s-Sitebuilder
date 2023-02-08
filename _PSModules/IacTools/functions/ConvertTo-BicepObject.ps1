<#
.SYNOPSIS
    Converts a PowerShell Object to a Bicep Object
.EXAMPLE
    @{ Foo = 'bar' } | ConvertTo-BicepObject
    {'Foo':'bar'}
#>
function ConvertTo-BicepObject {
    [CmdletBinding()]
    param (
        # Input object
        [Parameter(Mandatory = $false, ValueFromPipeline = $true)]
        [object]
        $PsObject
    )

    begin {

    }

    process {
        return (($PsObject | ConvertTo-Json -Compress) -replace '"', "'")
    }

    end {

    }
}
