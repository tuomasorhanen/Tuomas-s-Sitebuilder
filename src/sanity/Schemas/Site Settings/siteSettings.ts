import { RiSettings5Line } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';

const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: RiSettings5Line,
  groups: [
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
    {
      name: 'pageStyle',
      title: 'Page Style',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of the website, displayed in the browser tab and used by search engines.',
      group: 'general',
      validation: Rule => Rule.required()
        }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the website, used by search engines and social media for better indexing and sharing.',
      group: 'general',
      validation: Rule => Rule.required()
        }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'The logo image for the website, displayed in the header and used for branding purposes.',
      group: 'general',
      validation: Rule => Rule.required()    }),

    defineField({
      name: 'bgColorLight',
      title: 'Background Color',
      type: 'color',
      group: 'themeLight',
      validation: Rule => Rule.required()
,
    }),
    defineField({
      name: 'textColorLight',
      title: 'Text Color',
      type: 'color',
      group: 'themeLight',
      validation: Rule => Rule.required()
,
    }),
    defineField({
      name: 'primaryColorLight',
      title: 'Primary Color',
      type: 'color',
      group: 'themeLight',
      validation: Rule => Rule.required()
,
    }),
    defineField({
      name: 'secondaryColorLight',
      title: 'Secondary Color',
      type: 'color',
      group: 'themeLight',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'accentColorLight',
      title: 'Accent Color',
      type: 'color',
      group: 'themeLight',
      validation: Rule => Rule.required()
,
    }),
    defineField({
      name: 'bgColorDark',
      title: 'Background Color',
      type: 'color',
      group: 'themeDark',
      validation: Rule => Rule.required()
,
    }),
    defineField({
      name: 'textColorDark',
      title: 'Text Color',
      type: 'color',
      group: 'themeDark',
      validation: Rule => Rule.required()
,
    }),
    defineField({
      name: 'primaryColorDark',
      title: 'Primary Color',
      type: 'color',
      group: 'themeDark',
      validation: Rule => Rule.required()
,
    }),
    defineField({
      name: 'secondaryColorDark',
      title: 'Secondary Color',
      type: 'color',
      group: 'themeDark',
      validation: Rule => Rule.required()
,
    }),
    defineField({
      name: 'accentColorDark',
      title: 'Accent Color',
      type: 'color',
      group: 'themeDark',
      validation: Rule => Rule.required()
,
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
