import { defineField } from 'sanity';

const Card = defineField({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
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
    {
      name: 'blockContent',
      title: 'Block Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => [Rule.required().error('Content is required.')],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent.layout !== 'image-top',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'landingPage' }, { type: 'externalPage' }] }],
    },
  ],
});

export default Card;
