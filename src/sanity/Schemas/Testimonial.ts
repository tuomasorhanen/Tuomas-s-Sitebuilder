export default {
  name: 'Testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'showOnPages',
      title: 'Show on pages',
      type: 'array',
      of: [{ type: 'reference', to:[{type:'Page'}] }],
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{type:'Person'}]
    },
  ],
}
