import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'simpleImage',
  title: 'Image',
  type: 'object',
  fields: [
 
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => [Rule.required().error('Image is required.')],
    }),
    {
      name: 'style',
      title: 'Element Style',
      type: 'string',
      options: {
        list: [
          { title: 'square', value: 'square' },
          { title: 'logo-cloud', value: 'logo-cloud' },
        ],
        validation: Rule => [Rule.required().error('A style is required.')],
      },
    },
  ],
})