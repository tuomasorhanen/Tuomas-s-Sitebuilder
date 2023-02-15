export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [Rule.required().error('Title is required.')],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => [Rule.required().error('Description is required.')],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => [Rule.required().error('Image is required.')],
    },
  ],
};
