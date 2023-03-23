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
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'color',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
    }),
  ],
};

export default HeadingAndTitle;
