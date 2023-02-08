<#
.SYNOPSIS
    Converts a powershell array to bicep array
.DESCRIPTION
    Out-of-the-box, powershell is not able to produce a bicep compatible array
.EXAMPLE
    $psArray = @('one', 'two')
    $bicepArray = ConvertTo-BicepArray $psArray
    Converts to bicep-compatible array
#>
function ConvertTo-BicepArray {
    [CmdletBinding()]
    param (
        # ArrayToConvert
        [Parameter(Mandatory = $true, Position = 0, ValueFromPipeline = $true)]
        $PowerShellArray
    )

    begin {
        $jsonArray = ConvertTo-Json $PowerShellArray -Compress
        $bicepArray = $jsonArray -replace '"', "'"
    }

    process {
        return $bicepArray
    }

    end {

    }
}
