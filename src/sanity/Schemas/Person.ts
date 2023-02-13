export default {
  name: 'Person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: Rule => [
        Rule => Rule.required().error('Name is required.'),
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => [
        Rule => Rule.required().error('image is required. you can also you the avatar image from "select".'),
      ],
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => [
        Rule => Rule.required().error('Role is required.'),
      ],
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'Company' }],
      validation: Rule => [
        Rule => Rule.required().error('Company is required.'),
      ],
    },
  ],
};
