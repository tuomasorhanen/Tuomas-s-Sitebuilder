import {RiPagesLine} from 'react-icons/ri';
import {defineField} from 'sanity';

const Page = {
  name: 'Page',
  title: 'Pages',
  type: 'document',
  icon: RiPagesLine,
	groups: [
		{
			name: 'general',
			title: 'General'
		},
		{
			name: 'meta',
			title: 'Meta data'
		},
		{
			name: 'content',
			title: 'Content'
		}
	],
  fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Name of the page',
			group: 'general',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			description: 'Some frontends will require a slug to be set to be able to show the page',
			type: 'slug',
			options: {
				source: 'title',
			},
			group: 'general',
			validation: (Rule) => Rule.required()
		}),
    defineField({
			type: 'metaFields',
			title: 'Meta',
			name: 'meta',
			group: 'meta'
		}),
    defineField({
      name: 'menuOrder',
      title: 'Menu order',
      description: 'Order in which this page is shown on menu. Leave empty if not wanted in menu.',
      type: 'number',
    }),
		defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'content',
      of: [
        { type: 'Hero' },
        { type: 'HeadingAndTitle' },
        { type: 'landingPage' },
        { type: 'Contacts' },
        {
          name: 'Testimonial',
          type: 'reference',
          to: [{ type: 'Testimonial' }],
        },
        {
          name: 'Blog',
          type: 'reference',
          to: [{ type: 'blogPost' }],
        },
        {
          name: 'Service',
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    }),
  ],
  initialValue: {
    menuOrder: 0,
  },
  orderings: [
    {
      title: 'Menu order',
      name: 'menuOrder',
      by: [{ field: 'menuOrder', direction: 'asc' }],
    },
  ],
};

export default Page;
