const Page = {
  name: 'Page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      ],
    },
  ],
}

export default Page
