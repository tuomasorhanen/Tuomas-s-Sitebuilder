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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [Rule.required().error('The title will make it easier to identify the content of the carousel.')],
    },
    {
      name: 'slidesPerView',
      title: 'Slides Per View',
      type: 'number',
      description: 'Items per row for desktop',
      options: {
        list: [
          { title: '1 per view', value: 1 },
          { title: '2 per view', value: 2 },
          { title: '3 per view', value: 3 },
          { title: '4 per view', value: 4 },
          { title: '5 per view', value: 5 },
        ],
      },
    },
    {
      name: 'spaceBetween',
      title: 'Space Between',
      type: 'number',
      description: 'The space between slides in pixels',
      initialValue: 8,
    },
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'boolean',
      description: 'Enable or disable navigation arrows',
      initialValue: true,
    },
    {
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      description: 'Enable or disable looping slides',
      initialValue: false,
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      description: 'Enable or disable autoplay',
      initialValue: false,
    },
    {
      name: 'speed',
      title: 'Speed',
      type: 'number',
      description: 'The duration of the transition animation (in milliseconds)',
      initialValue: 1000,
    },
    {
      name: 'delay',
      title: 'Delay',
      type: 'number',
      description: 'The delay between transitions while in autoplay mode (in milliseconds)',
      initialValue: 7000,
      hidden: ({ parent }) => !parent.autoplay,
    },
    {
      name: 'disableOnInteraction',
      title: 'Disable Autoplay On Interaction',
      type: 'boolean',
      description: 'Disable autoplay when user interacts with the carousel',
      initialValue: false,
      hidden: ({ parent }) => !parent.autoplay,
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      options: {
        layout: 'carousel',
      },
      of: [{ type: 'simpleImage' }, { type: 'hero' }],
      validation: Rule => [Rule.required().error('content is required.')],
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
