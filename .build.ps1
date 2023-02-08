using module .\_PSModules\IacTools
<#
.SYNOPSIS
    Build bootstrapper that invokes the task files
.DESCRIPTION
    Loads all the required modules before invoking the task file with its arguments
.EXAMPLE
    Jamix.build.ps1 Test-PsScripts -Module test -Environment dev -IsTest $true

    Build Test-PsScripts Jamix.build.ps1
    Task /Test-PsScripts
    Task /Test-PsScripts/Test-Pester
    Done /Test-PsScripts/Test-Pester 00:00:00.0030468
    Done /Test-PsScripts 00:00:00.0409108
    Build succeeded. 2 tasks, 0 errors, 0 warnings 00:00:00.1086311
#>
[CmdletBinding()]
param (
    # Which module to deploy (aka. $Module.tasks.ps1 file)
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateSet('proenabler-ui')]
    [string]
    $Module,

    [Parameter(Position = 1)]
    [string[]]$Tasks,

    # Environment
    [Parameter(Mandatory = $true, Position = 2)]
    [ValidateSet('LOCAL', 'QA', 'PROD')]
    [string]
    $Environment,
    # Location
    [Parameter(Mandatory = $false)]
    [ValidateSet('WestEurope')]
    [string]
    $Location,

    # Cold Run (aka. what-if)
    [Parameter(Mandatory = $false)]
    [boolean]
    $ColdRun = $false,

    # Unbound Arguments
    [Parameter(Mandatory = $false, ValueFromRemainingArguments = $true)]$RestArgs
)

begin {
    # Configure Powershell behavior
    Set-StrictMode -Version Latest
    $ErrorActionPreference = 'Stop'

    # Load configuration
    $script:Config = . .\.config.ps1 $Environment

    # Get location from config if not explicitly defined
    $Location = (($Location) ? $Location : $Config.Location)

    # Enable automatic stepping into debugger on exception
    if ($Module -ne 'Test' -and $Config.Debug -eq $true -and !([System.Convert]::ToBoolean($Env:TF_BUILD))) {
        Debug-OnError
    }

    # Ensure Azure CLI is working on the correct context
    # ! Failure to do so, may result in deployment to a wrong subscription
    & az account set --subscription $Config.SubscriptionId

    # Initialize IacTools
    Initialize-EnvironmentSpec `
        -Module $Module `
        -Environment $Environment `
        -Location $Location `
        -SubscriptionId $Config.SubscriptionId `
        -ColdRun $ColdRun

    # Set up binary directory and add it to path
    $binPath = './bin'
    New-Item $binPath -ItemType Directory -Force | Out-Null
    $binPath = (Resolve-Path $binPath).Path
    if (!($Env:Path -contains $binPath)) {
        $Env:PATH += "$([System.IO.Path]::PathSeparator)$binPath"
    }

    # Set up dapr cli locally if not globally available
    if (!(Get-Command dapr -ErrorAction SilentlyContinue)) {
        $Env:DAPR_INSTALL_DIR = $binPath
    }
    # Checking prerequisites
    if (!(Get-Command az -ErrorAction SilentlyContinue)) {
        throw 'Azure cli is required.'
    }
    else {
        # When you run an extension command that is not installed,
        # the Azure CLI can recognize the command you run, and automatically
        # install the extension for you starting from version 2.10.0.
        # This feature, referred to as dynamic install, is enabled by default since 2.12.0.
        # REF: https://learn.microsoft.com/en-us/cli/azure/azure-cli-extensions-overview#install-extensions-automatically
        & az config set extension.use_dynamic_install=yes_without_prompt *>$null
        & az config set extension.run_after_dynamic_install=yes *>$null

        # REF: https://learn.microsoft.com/en-us/cli/azure/update-azure-cli#automatic-update
        & az config set auto-upgrade.enable=yes *>$null
        & az config set auto-upgrade.prompt=no *>$null
    }

    # Test module specifics
    if ($Module -eq 'Test') {
        try {
            Import-Module Pester
        }
        catch {
            Install-Module Pester -Scope CurrentUser -Force
            Import-Module Pester
        }
        try {
            Import-Module PSScriptAnalyzer
        }
        catch {
            Install-Module PSScriptAnalyzer -Scope CurrentUser -Force
            Import-Module PSScriptAnalyzer
        }
    }
}

process {
    # If script was invoked directly, we want to reinvoke it through Invoke-Build
    if ($MyInvocation.ScriptName -notlike '*Invoke-Build.ps1') {
        try {
            Import-Module InvokeBuild
        }
        catch {
            Install-Module InvokeBuild -Scope CurrentUser -Force
            Import-Module InvokeBuild
        }
        Invoke-Build -Task $Tasks -File $MyInvocation.MyCommand.Path @PSBoundParameters
        return
    }
    else {
        # Load the build tasks from $Module-specific task file.
        Get-ChildItem -Path "ci/modules/$($Module.ToLower())" -Filter ".tasks.ps1" -Force | ForEach-Object {
            $splat = @{}
            $key = ''
            if ($RestArgs) {
                $RestArgs | ForEach-Object {
                    if ($_.GetType() -ne [string]) {
                        # Handle non-string args and consider them values
                        $splat += @{ $key = $_ }
                    }
                    elseif ($_.StartsWith('-')) {
                        $key = $_.Substring(1)
                    }
                    else {
                        $splat += @{ $key = $_ }
                    }
                }

            }
            . $_.FullName @splat | Out-Null
        }
    }
}

end {}
