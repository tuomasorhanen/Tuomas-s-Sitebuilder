import { IPerson } from '_lib/types';
import Image from 'components/Image';

const PersonReferenceSection = (props: IPerson) => {
  const { image, name, role, _id, number, email } = props;

  return (
    <div key={props._id} className="grid p-4">
        <div className='flex justify-center py-4'>
        <Image {...image} alt="" className="h-40 w-40 rounded-full object-cover" />
        </div>
        <div className="text-center px-6 text-text">
            <h2 className="text-2xl font-bold tracking-tight text-text">{name}</h2>
          <p className='mt-2 text-2xl'>{role}</p>
          <p className='mt-2 text-2xl'>{number}</p>
          <p className='mt-2 text-2xl'>{email}</p>
          </div>
        </div>
  );
};

export default PersonReferenceSection;
