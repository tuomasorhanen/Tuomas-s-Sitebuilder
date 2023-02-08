function Use-Location {
    [CmdletBinding()]
    param (
        # Location
        [Parameter(Mandatory = $true)]
        [string]
        $Path,
        # Code to run
        [Parameter(Mandatory = $true)]
        [ScriptBlock]
        $ScriptBlock
    )
    
    begin {
        Push-Location $Path
    }
    
    process {
        $ScriptBlock.Invoke()
    }
    
    end {
        Pop-Location
    }
}