export default {
  name: 'Person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full name',
      type: 'string',
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'Company' }],
    },
  ],
}
