import { RiCheckboxIndeterminateLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const uiElement = defineField({
  name: 'uiElement',
  type: 'object',
  title: 'UI Element',
  hidden: true,
  description: 'A styling element to enhance the UI',
  icon: RiCheckboxIndeterminateLine,
  fields: [
    {
      name: 'style',
      title: 'UI Element Style',
      type: 'string',
      options: {
        list: [
          { title: 'solid', value: 'solid' },
          { title: 'wave', value: 'wave' },
        ],
        validation: Rule => [Rule.required().error('A style is required.')],
      },
    },
  ],
});

export default uiElement;
