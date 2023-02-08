<#
.SYNOPSIS
    Gets abbreviations for common items in azure
.DESCRIPTION
    Azure doesn't have consistent abbreviation scheme so we need to provide our own
.EXAMPLE
    Get-Abbreviation -Location
    weu
#>

{ 0 }
function Get-Abbreviation {
    [CmdletBinding()]
    [OutputType([String])]
    param (
        # Location
        [Parameter(Mandatory = $false)]
        [switch]
        $Location
    )

    begin {
        $spec = $script:EnvironmentSpec
    }

    process {
        if ($Location -eq $true) {
            switch ($spec.Location) {
                'westeurope' { 'weu' }
                Default { throw "Please implement abbreviation for ${spec.Location}" }
            }
        }
    }

    end {

    }

}
