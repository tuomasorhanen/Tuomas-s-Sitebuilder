import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'externalPage',
  title: 'External Page',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      name: 'externalLinkName',
      title: 'Extarnal Link Name',
      type: 'string',
      validation: Rule => [Rule.required().error('CTA is required.')],
    },

    {
      name: 'navigateToUrl',
      title: 'Navigate to Url',
      type: 'url',
      validation: Rule => [Rule.required().error('URL is required.')],

    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
  ],
};
