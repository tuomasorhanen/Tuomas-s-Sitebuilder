import { RiPagesLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const Page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: RiPagesLine,
  groups: [
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the page',
      group: 'general',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Slug creates a navigation path to your page.',
      type: 'slug',
      validation: Rule => [Rule.required().error('A page without a slug can not be navigated to.')],
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'menuOrder',
      title: 'Menu order',
      description: 'Order in which this page is shown on menu. Leave empty if not wanted in menu.',
      type: 'number',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'content',
      of: [
        { type: 'hero' },
        { type: 'headingAndTitle' },
        { type: 'customButton' },
        { type: 'uiElement' },
        { type: 'grid' },
        { type: 'carousel' },
        { type: 'bot' },
      ],
    }),
  ],
  initialValue: {
    menuOrder: 0,
  },
  orderings: [
    {
      title: 'Menu order',
      name: 'menuOrder',
      by: [{ field: 'menuOrder', direction: 'asc' }],
    },
  ],
};

export default Page;
