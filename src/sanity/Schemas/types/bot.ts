import { BsRobot } from 'react-icons/bs';

const Bot = {
  name: 'bot',
  title: 'Bot',
  type: 'object',
  hidden: true,
  icon: BsRobot,
  fields: [
    {
      name: 'layout',
      title: 'Bot Layout',
      type: 'string',
      options: {
        list: [
          { title: 'bot-center', value: 'bot-center' },
          { title: 'bot-image-bg', value: 'bot-image-bg' },
        ],
        validation: Rule => [Rule.required().error('A layout is required.')],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.layout !== 'bot-image-bg',
    },
    {
      name: 'bot',
      title: 'Bot',
      type: 'reference',
      to: [{ type: 'botSetup' }],
    },
  ],
};
export default Bot;
