const Hero = {
  name: 'Hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'url',
    },
    {
      name: 'imagePosition',
      title: 'Image position',
      type: 'string',
      options: {
        list:[
          { title: 'left', value: 'left' },
          { title: 'right', value: 'right' },
        ]
      }
    },
    {
      name: 'buttonText1',
      title: 'Button text',
      type: 'string',
    },
    {
      name: 'url1',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'buttonText2',
      title: 'Button text',
      type: 'string',
    },
    {
      name: 'url2',
      title: 'Url',
      type: 'url',
    },
  ],
}
export default Hero
