export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule => Rule.required().error('Title is required.'),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => [
        Rule => Rule.required().error('Slug is required.'),
      ],
    },
    {
      name: 'author',
      title: ' Author Name',
      type: 'string',
      validation: Rule => [
        Rule => Rule.required().error('Author is required.'),
      ],
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      validation: Rule => [
        Rule => Rule.required().error('Main image is required.'),
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => [
        Rule => Rule.required().error('Category is required.'),
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => [
        Rule => Rule.required().error('Description is required.'),
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'readingTime',
      title: 'Reading time',
      type: 'string',
      description:
        '⚡ how many minutes to read?',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'BlogImage' }, { type: 'BlogHeading' }, { type: 'BlogParagraph' }],
    },
  ],
};
