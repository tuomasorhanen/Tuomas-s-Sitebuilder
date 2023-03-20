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
      name: 'navigateToPage',
      title: 'Navigate to Page',
      type: 'reference',
      to: { type: 'Page' },
      validation: Rule => [Rule.required().error('navigation page is required.')],
    },
  ],
};
