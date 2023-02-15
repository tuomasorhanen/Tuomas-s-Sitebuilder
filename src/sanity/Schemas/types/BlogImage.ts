export default {
  name: 'BlogImage',
  title: 'Blog image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => [Rule.required().error('Image is required.')],
    },
    {
      name: 'description',
      title: 'Description',
      description: 'The image description will be visible bellow the picture',
      type: 'string',
      validation: Rule => [
        Rule.min(10).error('Description is too short.'),
        Rule.max(100).error('Description is too long.'),
      ],
    },
  ],
};
