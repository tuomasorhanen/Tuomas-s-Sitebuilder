import { defineField} from 'sanity';

const SocialButton = defineField({
  name: 'socialButton',
  title: 'Social Button',
  type: 'object',
  fields: [
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'externalPage' }] }],
    },
  ],
  
});
export default SocialButton;
