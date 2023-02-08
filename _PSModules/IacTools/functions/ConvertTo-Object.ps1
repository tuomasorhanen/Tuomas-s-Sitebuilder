<#
.SYNOPSIS
    Converts a hashtable to an object
.DESCRIPTION
    Objects are easier to serialize, thus we need a way to do it easily
.EXAMPLE
    @{ One='Hello' }, @{ Two='World' } | ConvertTo-Object

    One   Two
    ---   ---
    Hello World
#>
function ConvertTo-Object {
    [CmdletBinding()]
    param (
        [Parameter(ValueFromPipeline = $true)]
        [hashtable]
        $Hashtable
    )

    begin {
        $object = New-Object Object
    }

    process {
        $Hashtable.GetEnumerator() | ForEach-Object {
            Add-Member `
                -InputObject $object `
                -MemberType NoteProperty `
                -Name $_.Name `
                -Value $_.Value
        }
    }

    end {
        return $object
    }
}
