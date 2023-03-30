import { defineField} from 'sanity';

const CustomButton = defineField({
  name: 'customButton',
  title: 'Custom Button',
  type: 'object',
  fields: [
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'landingPage' }, {type: 'externalPage'}]}],
    },
  ],
  
});
export default CustomButton;
