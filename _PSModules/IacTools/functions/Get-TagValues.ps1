<#
.SYNOPSIS
    Generates standards based tags for a resource
.EXAMPLE
    Get-TagValues -Module -Environment

    Name                           Value
    ----                           -----
    Module                         CACHE
    Created                        2022-09-27
    Environment                    QA
    CreatedBy                      azuread\janihyytiäinen
.EXAMPLE
    Get-TagValues -Module -Environment -Bicep
    {'Module':'CACHE','Created':'2022-09-27','Environment':'QA','CreatedBy':'azuread\\janihyytiäinen'}

    Generates bicep object compatible tags
.EXAMPLE
    Get-TagValues -Module -Environment -MergeWith @{Foo='bar'}

    Foo         : bar
    Module      : EVENTSTORE
    Environment : QA
    CreatedBy   : azuread\janihyytiäinen
    Created     : 2022-09-30
#>
function Get-TagValues {
    [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("PSUseSingularNouns", "")]
    [CmdletBinding()]
    param (
        # Created By
        [Parameter(Mandatory = $false)]
        [string]
        $CreatedBy = $script:EnvironmentSpec.Creator,
        # Module
        [Parameter(Mandatory = $false)]
        [switch]
        $Module,
        # Environment
        [Parameter(Mandatory = $false)]
        [switch]
        $Environment,
        # Convert to JSON
        [Parameter(Mandatory = $false)]
        [switch]
        $Bicep,
        # Format for Az CLI
        [Parameter(Mandatory = $false)]
        [switch]
        $AzCli,
        # Merge with tags
        [Parameter(Mandatory = $false)]
        [hashtable]
        $MergeWith = @{}
    )

    begin {
        $tagValues = @{
            Created   = "{0:yyyy-MM-dd}" -f (get-date);
            CreatedBy = $CreatedBy;
        }

        $spec = $script:EnvironmentSpec

        if ($Module) {
            $tagValues += @{
                Module = $spec.Module.ToUpper()
            }
        }

        if ($Environment) {
            $tagValues += @{
                Environment = $spec.Environment
            }
        }
        $tagValues = $MergeWith, $tagValues | ConvertTo-Object
    }

    process {
        if ($AzCli -eq $true) {
            $tagValues = $tagValues | ConvertTo-Json -Compress
            $tagValues = $tagValues.Replace('":"', '"="')
            $tagValues = $tagValues.Replace('","', '" "')
            $tagValues = $tagValues.Replace('{', '')
            $tagValues = $tagValues.Replace('}', '')
        }
        elseif ($Bicep -eq $true) {
            $tagValues = $tagValues | ConvertTo-Json -Compress
            $tagValues = $tagValues.Replace('"', '''')
        }
        return $tagValues
    }

    end {

    }
}
