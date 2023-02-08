export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Full name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'referenceImage',
      title: 'Image',
      type: 'url',
    },
  ],
}
