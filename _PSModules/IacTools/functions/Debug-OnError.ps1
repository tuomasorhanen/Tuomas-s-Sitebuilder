
<#PSScriptInfo
.VERSION 1.0.1
.AUTHOR Roman Kuzmin
.COPYRIGHT (c) Roman Kuzmin
.TAGS Debug Test
.GUID d653eca4-056c-48ea-8b60-7f886d1a0dca
.LICENSEURI http://www.apache.org/licenses/LICENSE-2.0
.PROJECTURI https://github.com/nightroman/PowerShelf
#>

function Debug-OnError {
	[CmdletBinding()]
	param(
		[Parameter()]
		[string[]]$Script,
		[scriptblock]$Action,
		[switch]$Off
	)

	begin {
		Get-PSBreakpoint -Variable StackTrace | Remove-PSBreakpoint
	}

	process {
		if (!$Off) {
			$param = if ($Script) { @{Script = $Script } } else { @{} }
			$null = Set-PSBreakpoint -Variable StackTrace -Mode Write -Action $Action @param
		}
	}

	end {

	}
}
