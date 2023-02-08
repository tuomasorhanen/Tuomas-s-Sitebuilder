# Set error action to stop module-wide
$script:ErrorActionPreference = 'Stop'
# Ensure strict mode is on for the module
Set-StrictMode -Version Latest

# Import all functions within the functions folder
$fnPath = Resolve-Path (Join-Path $PSScriptRoot 'functions')
Write-Output $fnPath
Get-ChildItem -Path $fnPath -Filter '*.ps1' -File | ForEach-Object {
    if (!$_.BaseName.EndsWith('tests')) {
        # Import function by dot sourcing it
        . $_.FullName
        # Export (make externally accessible)
        Export-ModuleMember -Function $_.BaseName
    }
}

$privateFnPath = Resolve-Path (Join-Path $fnPath 'private')
Get-ChildItem -Path $privateFnPath -Filter '*.ps1' -File | ForEach-Object {
    # Import function by dot sourcing it (but only if it's not a test file)
    . $_.FullName
}


$script:EnvironmentSpec = @{
    Module         = $null;
    Environment    = $null;
    Location       = $null;
    SubscriptionId = $null;
    Prefixes       = [PSCustomObject]@{
        ResourceGroup = 'rg'
        Vault         = 'kv'
        Deployment    = 'dep'
        Redis         = 'redis'
    };
    Suffixes       = @{}
    ColdRun        = $false
    Creator        = [System.Convert]::ToBoolean($Env:CI) ? 'Automation' : (whoami)
}
