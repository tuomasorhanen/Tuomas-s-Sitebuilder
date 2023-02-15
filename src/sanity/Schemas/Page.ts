const Page = {
  name: 'Page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => [
        Rule => Rule.required().error('Name is required.'),
        Rule => Rule.min(3).error('Minimum 3 characters required.'),
        Rule => Rule.max(25).error('Maximum 25 characters.'),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
      validation: Rule => [Rule.required().error('Slug is required for navigation to page.')],
    },
    {
      name: 'menuOrder',
      title: 'Menu order',
      description: 'Order in which this page is shown on menu. Leave empty if not wanted in menu.',
      type: 'number',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'Hero' },
        { type: 'HeadingAndTitle' },
        { type: 'LandingPage' },
        { type: 'Contacts' },
        {
          name: 'Testimonial',
          type: 'reference',
          to: [{ type: 'Testimonial' }],
        },
        {
          name: 'Blog',
          type: 'reference',
          to: [{ type: 'blogPost' }],
        },
        {
          name: 'Service',
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    },
  ],
  initialValue: {
    menuOrder: 0,
  },
  orderings: [
    {
      title: 'Menu order',
      name: 'menuOrder',
      by: [{ field: 'menuOrder', direction: 'asc' }],
    },
  ],
};

export default Page;
