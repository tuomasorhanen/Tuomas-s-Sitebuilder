function Get-Environment {
    [CmdletBinding()]
    param (
    )

    begin {
        $spec = $script:EnvironmentSpec
        $module = $spec.Module
        $environment = $spec.Environment.ToLower()
        $location = $spec.Location

        $deploymentName = Get-DeploymentName -Module $module
        $resourceGroupName = 'DefaultResourceGroup-WEU'
    }

    process {
        if ($script:EnvironmentSpec[$module]) {
            return $script:EnvironmentSpec[$module]
        }

        $script:EnvironmentSpec[$module] = (& az deployment group create `
                --name $deploymentName `
                --resource-group $resourceGroupName `
                --template-file ./ci/modules/_lib/amban.bicep `
                --parameters `
                module=$module `
                environment=$environment `
                location=$location | ConvertFrom-Json).properties.outputs.env.value

        return $script:EnvironmentSpec[$module]
    }

    end {

    }
}
