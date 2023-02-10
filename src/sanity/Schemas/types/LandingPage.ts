export default {
  name: 'LandingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'callToAction',
      title: 'Call to action text',
      type: 'string',
    },
    {
      name: 'navigateToPage',
      title: 'Navigate to Page',
      type: 'reference',
      to: { type: 'Page' },
    },
  ],
};
