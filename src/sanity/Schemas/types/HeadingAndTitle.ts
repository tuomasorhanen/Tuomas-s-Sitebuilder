const HeadingAndTitle = {
  name: 'HeadingAndTitle',
  title: 'Heading And Title',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [Rule => Rule.required().error('Title is required.')],
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
};
export default HeadingAndTitle;
