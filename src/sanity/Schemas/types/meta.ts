import { RiShareLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const meta = defineField({
  name: 'metaFields',
  title: 'Meta Information',
  type: 'object',
  icon: RiShareLine,
  groups: [
    {
      name: 'opengraph',
      title: 'Open Graph Protocol',
    },
  ],
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
    },
    {
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Ideal size for open graph images is 1200 x 600',
      options: {
        hotspot: true,
      },
      group: 'opengraph',
    },
    {
      name: 'openGraphTitle',
      title: 'Open Graph Title',
      type: 'string',
      group: 'opengraph',
    },
    {
      name: 'openGraphDescription',
      title: 'Open Graph Description',
      type: 'text',
      group: 'opengraph',
    },
  ],
});

export default meta;
