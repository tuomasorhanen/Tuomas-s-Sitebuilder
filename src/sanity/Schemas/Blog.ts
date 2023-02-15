export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The blog Title will be shown in the blog preview card',
      type: 'string',
      validation: Rule => [Rule.required().error('Title is required.')],
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Slug is used for navigating to the blogpost.',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => [Rule.required().error('Slug is required.')],
    },
    {
      name: 'author',
      title: ' Author Name',
      type: 'string',
      validation: Rule => [Rule.required().error('Author is required.')],
    },
    {
      name: 'image',
      title: 'Main Image',
      description: 'The main image will be shown on the blog preview card',
      type: 'image',
      validation: Rule => [Rule.required().error('Main image is required.')],
    },
    {
      name: 'category',
      title: 'Category',
      description: 'You can create new categories or write the name of an existing one.',
      type: 'string',
      validation: Rule => [Rule.required().error('Category is required.')],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: 'The excerpt will be shown in the blog preview cards.',
      type: 'text',
      validation: Rule => [Rule.required().error('Excerpt is required.')],
    },
    {
      name: 'readingTime',
      title: 'Reading time',
      type: 'number',
      description: '⚡ how many minutes to read? (# number)',
      validation: Rule => [Rule.required().error('Reading time is required')],
    },
    {
      name: 'content',
      title: 'Content',
      description:
        'The blogpost will be made of headings, parahrapghs and images. Several of each can and should be used.',
      type: 'array',
      of: [{ type: 'BlogImage' }, { type: 'BlogHeading' }, { type: 'BlogParagraph' }],
    },
  ],
};
