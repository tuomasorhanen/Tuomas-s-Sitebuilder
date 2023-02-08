param environment string
param location string
param module string

resource stapp 'Microsoft.Web/staticSites@2022-03-01' = {
  name: 'stapp-${module}-${toLower(environment)}-weu'
  location: location
  tags: {
  }
  properties: {
    repositoryUrl: 'https://dev.azure.com/amban/ProEnabler.Studio/_git/ProEnabler.Studio'
    branch: 'main'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'DevOps'
    enterpriseGradeCdnStatus: 'Disabled'
  }
  sku: {
    name: 'Standard'
    tier: 'Standard'
  }
}
