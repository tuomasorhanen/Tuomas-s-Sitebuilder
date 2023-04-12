import { SiStyleshare } from 'react-icons/si';
import { defineField } from 'sanity';

const uiElement = defineField({
  name: 'uiElement',
  type: 'object',
  title: 'UI Element',
  hidden: true,
  description: 'A styling element to enhance the UI',
  icon: SiStyleshare,
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
          { title: 'image-divider', value: 'image-divider' },
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
      hidden: ({ parent }) => parent?.style !== 'image-divider',
    },
  ],
});

export default uiElement;
