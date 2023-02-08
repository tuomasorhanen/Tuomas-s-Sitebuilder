param module string
param environment string
param location string

var abbr_location = (location =~ 'westeurope') ? 'weu' : location

@description('''
  Scoped suffixes.
  suffix.env = resources that have only single instance per environment.
  suffix.mod = resources that are in module scope
''')
var suffix = {
  env: '${toLower(environment)}-${abbr_location}'
  mod: '${toLower(module)}-${toLower(environment)}-${abbr_location}'
}

var prefix = {
  agw: 'agw'
  aks: 'aks'
  appi: 'appi'
  b2c: 'b2c'
  cosmos: 'cosmos'
  gen: 'g6'
  kv: 'kv'
  log: 'log'
  mid: 'mid'
  pip: 'pip'
  rg: 'rg'
  snet: 'snet'
  sp: 'sp'
  vnet: 'vnet'
  waf: 'waf'
}

var mod = {
  aks: 'aks'
  database: 'database'
  keyvault: 'keyvault'
  logging: 'logging'
  b2c: 'b2c'
}

output abbreviation object = {
  location: abbr_location
}

@description('''
agw   = Application Gatway
aks   = Azure Kubernetes Service
kv    = Key Vault
pip   = Private IP
rg    = Resource Group
vnet  = Virtual Network
''')
output name object = {
  // * Use suffix.env for resources that should have only single instance / environment
  // * Use suffix.mod for resources that should be scoped to the module
  agw: '${prefix.agw}-${suffix.env}'
  aks: '${prefix.aks}-${suffix.env}'
  kv: '${prefix.kv}-${suffix.env}'
  pip: '${prefix.pip}-${suffix.mod}'
  rg: '${prefix.rg}-${suffix.mod}'
  vnet: '${prefix.vnet}-${suffix.mod}'
}

output prefix object = prefix

@description('Scoped suffixes: environment or module')
output suffix object = {
  environment: suffix.env
  module: suffix.mod
}

var rg = {
  // * Use these to reference environment scoped resources
  aks: '${prefix.rg}-${prefix.gen}-${mod.aks}-${suffix.env}'
  kv: '${prefix.rg}-${prefix.gen}-${mod.keyvault}-${suffix.env}'
  log: '${prefix.rg}-${prefix.gen}-${mod.logging}-${suffix.env}'
}

output rg object = rg
output env object = {
  site: {
    rg_name: '${prefix.rg}-${suffix.mod}'
  }
}

output role object = {
  acr_pull: resourceId('Microsoft.Authorization/roleDefinitions', '7f951dda-4ed3-4680-a7ca-43fe172d538d')
  reader: resourceId('Microsoft.Authorization/roleDefinitions', 'acdd72a7-3385-48ef-bd42-f606fba81ae7')
  contrib: resourceId('Microsoft.Authorization/roleDefinitions', 'b24988ac-6180-42a0-ab88-20f7382dd24c')
  mid_operator: resourceId('Microsoft.Authorization/roleDefinitions', 'f1a07417-d97a-45cb-824c-7a7467783830')
  network_contrib: resourceId('Microsoft.Authorization/roleDefinitions', '4d97b98b-1d4f-4787-a291-c67834d212e7')
}
