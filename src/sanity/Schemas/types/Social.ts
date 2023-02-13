export default {
  name: 'Social',
  title: 'Social',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => [
        Rule => Rule.required().error('title is required.'),
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => [
        Rule => Rule.required().error('image is required.'),
      ],
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: Rule => [
        Rule => Rule.required().error('url is required.'),
      ],
    },
  ],
};
