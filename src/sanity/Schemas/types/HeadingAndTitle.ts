import { TbHeading } from 'react-icons/tb';

const HeadingAndTitle = {
  name: 'headingAndTitle',
  title: 'Heading And Title',
  type: 'object',
  icon: TbHeading,
  fields: [
    {
      name: 'blockContent',
      title: 'Block Content',
      type: 'array',
      of: [{ type: 'blockContent' }],
      validation: Rule => [Rule.required().error('content is required.')],
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'centered', value: 'centered' },
          { title: 'overlap-bellow', value: 'overlap-bellow' },
        ],
        validation: Rule => [Rule.required().error('A style is required.')],
      },
    },
  ],
};

export default HeadingAndTitle;
