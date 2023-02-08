[CmdletBinding()]
param (
        
)
    
begin {
    $webUiLocation = Resolve-Path 'src' 
    $env = Get-Environment
    $resourceGroupName = $env.site.rg_name
}
    
process {
    task Install {
        Use-Location $webUiLocation {
            exec {
                & yarn install
            } -Echo
        }
    }

    task Lint Install, {
        Use-Location $webUiLocation {
            exec {
                & yarn lint:fix
            } -Echo
        }
    }

    task Build Install, {
        Use-Location $webUiLocation {
            exec {
                & yarn build
            } -Echo
        }
    }, Clean

    task Clean {
        Remove-Item ./src/.next -Recurse -Force -ErrorAction Ignore
    }

    task Dev Install, {
        Use-Location $webUiLocation {
            exec {
                & yarn dev
            } -Echo
        }
    }

    task Deploy-ResourceGroup {
        Deploy-ResourceGroup -Name $resourceGroupName
    }

    task Provision Deploy-ResourceGroup, {
        $deploymentName = Get-DeploymentName
        exec {
            & az deployment group create (Get-BicepDeploymentArgs) `
                --name $deploymentName `
                --resource-group $resourceGroupName `
                --template-file ./ci/modules/proenabler-ui/main.bicep `
                --parameters `
                environment=$Environment `
                location=$Location `
                module=$Module `
        } -Echo
    }
}
    
end {
        
}
