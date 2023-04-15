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
          { title: 'solid-left', value: 'solid-left' },
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
      hidden: ({ parent }) => parent?.style !== 'image-divider',
    },
  ],
});

export default uiElement;
