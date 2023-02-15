const Contacts = {
  name: 'Contacts',
  title: 'Contacts',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [Rule.required().error('Title is required.')],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => [Rule.required().error('Description is required.')],
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: Rule => [Rule.required().error('Phone number for the contact page is required.')],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => [Rule.required().error('Email address is required but format is can vary.')],
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => [Rule.required().error('Address for the company is required.')],
    },
    {
      name: 'businessId',
      title: 'Business id',
      type: 'string',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      description: 'The page will render buttons based on the image. This is great for social media icons.',
      type: 'array',
      of: [{ type: 'Social' }],
    },
  ],
};
export default Contacts;
