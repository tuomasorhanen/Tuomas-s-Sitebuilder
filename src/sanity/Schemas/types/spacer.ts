import { RiCheckboxIndeterminateLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const spacer = defineField({
  name: 'spacer',
  type: 'object',
  title: 'Spacer',
  hidden: true,
  description: 'An empty block to create space between sections',
  icon: RiCheckboxIndeterminateLine,
  fields: [
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: '4' },
          { title: 'Medium', value: '8' },
          { title: 'Large', value: '16' },
          { title: 'X-Large', value: '24' },
        ],
        layout: 'radio',
      },
    },
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      title: 'size',
    },
    prepare({ title }: { title: string }) {
      return {
        title: `Spacer ${title.charAt(0).toUpperCase() + title.slice(1)}`,
      };
    },
  },
});

export default spacer;
