export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: ' Author Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },

    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
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
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'BlogImage' }, { type: 'BlogHeading' }, { type: 'BlogParagraph' }],
    },
  ],
};
