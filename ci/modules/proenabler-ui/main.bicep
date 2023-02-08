param environment string
param location string
param module string

module stapp 'stapp.bicep' = {
  name: 'stapp-${deployment().name}'
  params: {
    environment: environment
    location: location
    module: module
  }
}
