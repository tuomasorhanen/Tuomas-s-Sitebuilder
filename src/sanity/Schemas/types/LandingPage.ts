export default {
  name: 'LandingPage',
  title: 'Landing Page',
  type: 'document',
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
