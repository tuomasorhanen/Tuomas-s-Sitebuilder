export default {
  name: 'Customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'customer',
      title: 'Customer',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Company' }, { type: 'Person' }],
        },
      ],
    },
  ],
}
