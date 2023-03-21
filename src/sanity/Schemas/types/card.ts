import { defineField } from 'sanity';

const Card = {
  name: 'card',
  title: 'Card',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'layout',
      title: 'Card Layout',
      type: 'string',
      options: {
        list: [
          { title: 'simple', value: 'simple' },
          { title: 'image-top', value: 'image-top' },
        ],
        validation: Rule => [Rule.required().error('A layout is required.')],
      },
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
export default Card;