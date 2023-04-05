import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'SimpleImage',
  title: 'Image',
  type: 'object',
  fields: [
 
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})