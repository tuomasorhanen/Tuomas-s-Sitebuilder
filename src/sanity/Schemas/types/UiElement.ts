import { RiCheckboxIndeterminateLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const uiElement = defineField({
  name: 'uiElement',
  type: 'object',
  title: 'UI Element',
  hidden: true,
  description: 'A styling element to enhance the UI',
  icon: RiCheckboxIndeterminateLine,
  fields: [
    {
      name: 'style',
      title: 'UI Element Style',
      type: 'string',
      options: {
        list: [
          { title: 'solid', value: 'solid' },
          { title: 'wave', value: 'wave' },
          { title: 'transparent-overlap', value: 'transparent-overlap' },
          { title: 'window', value: 'window' },
        ],
        validation: Rule => [Rule.required().error('A style is required.')],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.style !== 'window',
    },
  ],
});

export default uiElement;
