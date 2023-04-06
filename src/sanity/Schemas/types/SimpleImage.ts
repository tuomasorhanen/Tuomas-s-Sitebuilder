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
  ],
})