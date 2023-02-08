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
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options:{
        source: 'name',
        maxLength: 200,
      }
    },
    {
      name: 'menuOrder',
      title: 'Menu order',
      type: 'number',
      default: 0,
      description: 'Order in which this page is shown on menu. Leave empty if not wanted in menu.'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'Hero' },
        { type: 'About' },
        { type: 'HeadingAndTitle' },
        { type: 'Button' },
        { type: 'Testimonial' },
        { type: 'Customer' },
      ],
    },
  ],
  initialValue: {
    menuOrder: 0
  },
  orderings: [
    {
      title: 'Menu order',
      name: 'menuOrder',
      by: [
        { field: 'menuOrder', direction: 'asc' }
      ]
    }
  ]
}

export default Page
