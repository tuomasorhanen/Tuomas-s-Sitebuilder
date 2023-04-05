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
      name: 'themeLight',
      title: 'Light Theme',
    },
    {
      name: 'themeDark',
      title: 'Dark Theme',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the page',
      group: 'general',
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
      name: 'bgColorLight',
      title: 'Background Color',
      type: 'color',
      group: 'themeLight',
    }),
    defineField({
      name: 'textColorLight',
      title: 'Text Color',
      type: 'color',
      group: 'themeLight',
    }),
    defineField({
      name: 'primaryColorLight',
      title: 'Primary Color',
      type: 'color',
      group: 'themeLight',
    }),
    defineField({
      name: 'secondaryColorLight',
      title: 'Secondary Color',
      type: 'color',
      group: 'themeLight',
    }),
    defineField({
      name: 'accentColorLight',
      title: 'Accent Color',
      type: 'color',
      group: 'themeLight',
    }),
    defineField({
      name: 'bgColorDark',
      title: 'Background Color',
      type: 'color',
      group: 'themeDark',
    }),
    defineField({
      name: 'textColorDark',
      title: 'Text Color',
      type: 'color',
      group: 'themeDark',
    }),
    defineField({
      name: 'primaryColorDark',
      title: 'Primary Color',
      type: 'color',
      group: 'themeDark',
    }),
    defineField({
      name: 'secondaryColorDark',
      title: 'Secondary Color',
      type: 'color',
      group: 'themeDark',
    }),
    defineField({
      name: 'accentColorDark',
      title: 'Accent Color',
      type: 'color',
      group: 'themeDark',
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
