export default {
  name: 'BlogHeading',
  title: 'Blog heading',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'number',
      validation: Rule => [Rule.required().error('Level is required')],
      options: {
        list: [
          { title: 'Heading 1', value: 1 },
          { title: 'Heading 2', value: 2 },
          { title: 'Heading 3', value: 3 },
          { title: 'Heading 4', value: 4 },
          { title: 'Heading 5', value: 5 },
          { title: 'Heading 6', value: 6 },
        ],
        layout: 'radio',
      },
    },
  ],
  initialValue: {
    level: 1,
  },
};
