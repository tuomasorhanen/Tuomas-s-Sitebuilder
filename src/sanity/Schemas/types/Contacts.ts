const Contacts = {
  name: 'Contacts',
  title: 'Contacts',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'businessId',
      title: 'Business id',
      type: 'string',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'Social' }],
    },
  ],
};
export default Contacts;
