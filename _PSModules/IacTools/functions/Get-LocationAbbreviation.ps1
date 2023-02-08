<#
.SYNOPSIS
    Generates abbreviations for locations
.DESCRIPTION
    Since azure doesn't have a standard for location abbreviations, we need to define them.
.EXAMPLE
    PS> Get-LocationAbbreviation -Location westeurope
    weu
#>
function Get-LocationAbbreviation {
    [CmdletBinding()]
    [OutputType([String])]
    param (
        # Location name
        [Parameter(Mandatory = $true)]
        [string]
        $Location
    )

    begin {

    }

    process {
        switch ($Location) {
            'westeurope' { return 'weu' }
            'northeurope' { return 'neu' }
            Default { $Location }
        }
    }

    end {

    }
}
