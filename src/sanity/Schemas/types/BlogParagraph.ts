export default {
  name: 'BlogParagraph',
  title: 'Blog paragraph',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: Rule => [Rule.required().error('Text is required.')],
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      validation: Rule => [Rule.required().error('Style is required')],
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Quote', value: 'quote' },
        ],
        layout: 'radio',
      },
    },
  ],
  initialValue: {
    style: 'normal',
  },
};
