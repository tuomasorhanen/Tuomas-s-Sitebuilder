import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      name: 'callToAction',
      title: 'Call to action text',
      type: 'string',
      validation: Rule => [Rule.required().error('CTA is required.')],
    },
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
      },
      validation: Rule => [Rule.required().error('Link type is required.')],
    },
    {
      name: 'navigateToPage',
      title: 'Navigate to Page',
      type: 'reference',
      to: { type: 'page' },
      validation: Rule => [
        Rule.custom((value, context) => {
          if (context.parent.linkType === 'internal' && !value) {
            return 'Navigation page is required.';
          }
          return true;
        }),
      ],
    },
    {
      name: 'navigateToUrl',
      title: 'Navigate to Url',
      type: 'url',
      validation: Rule => [
        Rule.custom((value, context) => {
          if (context.parent.linkType === 'external' && !value) {
            return 'URL is required.';
          }
          return true;
        }),
      ],
    },
    
    {
      name: 'buttonContent',
      title: 'Button Content',
      type: 'string',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Image', value: 'image' },
        ],
        layout: 'radio',
      },
      validation: Rule => [Rule.required().error('Button content is required.')],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.buttonContent !== 'image',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Transparent', value: 'transparent' },
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Accent', value: 'accent' },
        ],
        layout: 'radio',
      },
      hidden: ({ parent }) => parent?.buttonContent !== 'text',
    },
    
  ],
};
