import { defineField} from 'sanity';
import { RxButton } from 'react-icons/rx';


const CustomButton = defineField({
  name: 'customButton',
  title: 'Custom Button',
  type: 'object',
  icon: RxButton,
  fields: [
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'landingPage' }, { type: 'externalPage' }] },
      ],
    },
  ],
});
export default CustomButton;
