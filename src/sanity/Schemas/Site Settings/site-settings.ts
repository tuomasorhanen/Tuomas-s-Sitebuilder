import { RiSettings5Line } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';

const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: RiSettings5Line,
  groups: [
    {
      name: 'meta',
      title: 'Meta Data',
    },
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'theme',
      title: 'Theme',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the page',
      group: 'general',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description for search engines and social media.',
      group: 'general',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
    }),
    defineField({
      type: 'metaFields',
      title: 'Meta',
      name: 'meta',
      group: 'meta',
    }),
    defineField({
      name: 'defaultBgColor',
      title: 'Default Background Color',
      type: 'color',
      group: 'theme',
    }),
    defineField({
      name: 'defaultTextColor',
      title: 'Default Text Color',
      type: 'color',
      group: 'theme',
    }),
    defineField({
      name: 'defaultHighlightColor',
      title: 'Default Highlight Color',
      type: 'color',
      group: 'theme',
    }),
    defineField({
      name: 'defaultPowerColor',
      title: 'Default Power Color',
      type: 'color',
      group: 'theme',
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Global Settings',
      };
    },
  },
});

export default siteSettings;
