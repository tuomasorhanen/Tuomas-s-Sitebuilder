import { RiLayoutGridLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const grid = defineField({
  name: 'grid',
  type: 'object',
  title: 'Grid',
  hidden: true,
  description: 'This is a simple grid component, all items are going to be equally wide',
  icon: RiLayoutGridLine,
  groups: [
    {
      name: 'columns',
      title: 'Columns',
    },
    {
      name: 'items',
      title: 'Items',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'columns',
      title: 'Columns',
      description:
        'There are some issues currently with the grid component. Please check if you got the expected amoint of columns.',
      type: 'columns',
      group: 'columns',
    },
    {
      name: 'items',
      title: 'Items',
      group: 'items',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [{ type: 'Hero' }, { type: 'card' }, { type: 'ball' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: { title: string }) {
      return {
        title: `${title}`,
      };
    },
  },
});

export default grid;
