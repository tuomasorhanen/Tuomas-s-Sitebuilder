const Hero = {
  name: 'Hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        '⚡ Optional: Herosection should have a title, but a Hero component with no other content but button can be used to create buttons.',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'layout',
      title: 'Hero Layout',
      type: 'string',
      options: {
        list: [
          { title: 'slash-right', value: 'slash-right' },
          { title: 'circle-left', value: 'circle-left' },
          { title: 'simple-right', value: 'simple-right' },
        ],
        validation: Rule => [Rule => Rule.required().error('Choosing a layout is required.')],
      },
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'LandingPage' }] }, { type: 'Social' }],
    },
  ],
};
export default Hero;
