import { defineField } from 'sanity';

const Ball = {
  name: 'ball',
  title: 'Ball',
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
    {
      name: 'opacity',
      title: 'Background Opacity',
      type: 'number',
      options: {
        list: [
          { title: '10', value: 10 },
          { title: '20', value: 20 },
          { title: '30', value: 30 },
          { title: '40', value: 40 },
          { title: '50', value: 50 },
          { title: '75', value: 75 },
          { title: '80', value: 80 },
          { title: '90', value: 90 },
          { title: '100', value: 100 },
        ],
      },
    },
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlight Color',
      type: 'color',
    }),
  ],
};
export default Ball;
