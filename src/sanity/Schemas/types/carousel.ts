import { BiCarousel } from 'react-icons/bi';
import { defineField } from 'sanity';

const Carousel = defineField({
  name: 'carousel',
  type: 'object',
  title: 'Carousel',
  hidden: true,
  icon: BiCarousel,

  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      options: {
        layout: 'carousel',
      },
      of: [{ type: 'SimpleImage' }],
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

export default Carousel;
