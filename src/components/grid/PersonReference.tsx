import { IPerson } from '_lib/types';
import Image from 'components/Image';

const PersonReferenceSection = (props: IPerson) => {
  const { image, name, role, _id, number, email } = props;

  return (
    <div key={props._id}>
        <div className='flex justify-center py-4'>
        <Image {...image} alt="" className="h-40 w-40 rounded-full object-cover" />
        </div>
        <div className="text-center">
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className='mt-2 text-2xl'>
          <p>{role}</p>
          <p>{number}</p>
          <p>{email}</p>
          </div>
          </div>
        </div>
  );
};

export default PersonReferenceSection;