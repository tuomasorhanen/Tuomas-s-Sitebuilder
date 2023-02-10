export default {
  name: 'Company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => [
        Rule => Rule.required().error('Name is required.'),
        Rule => Rule.min(3).error('Minimum 3 characters required.'),
        Rule => Rule.max(25).error('Maximum 25 characters.'),
      ],
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'Person' }] }],
    },
  ],
};
