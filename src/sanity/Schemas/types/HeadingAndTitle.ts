import { TbHeading } from 'react-icons/tb';

const HeadingAndTitle = {
  name: 'HeadingAndTitle',
  title: 'Heading And Title',
  type: 'object',
  icon: TbHeading,
  fields: [
    {
      name: 'blockContent',
      title: 'Block Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default HeadingAndTitle;
