import { defineField } from 'sanity';

const HeadingAndTitle = {
  name: 'HeadingAndTitle',
  title: 'Heading And Title',
  type: 'object',
  fields: [
    {
      name: 'blockContent',
      title: 'Block Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default HeadingAndTitle;
