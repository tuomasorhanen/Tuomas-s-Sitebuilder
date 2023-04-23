export default {
    name: 'botSetup',
    title: 'Bot Setup',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'tenantId',
        title: 'Tenant id',
        type: 'string',
      },
      {
        name: 'instanceId',
        title: 'Instance id',
        type: 'string',
      },
      {
        name: 'subscriptionKey',
        title: 'Subscription key',
        type: 'string',
      },
    ],
  };