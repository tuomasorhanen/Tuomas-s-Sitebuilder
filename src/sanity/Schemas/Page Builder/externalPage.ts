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
    },

    {
      name: 'navigateToUrl',
      title: 'Navigate to Url',
      type: 'url',
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
