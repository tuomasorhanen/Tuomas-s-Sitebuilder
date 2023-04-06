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
      of: [{ type: 'block' }],
      validation: Rule => [Rule.required().error('content is required.')],
    },
  ],
};

export default HeadingAndTitle;
