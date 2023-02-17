import { IService } from '_lib/types';

import Image from './Image';

const ServiceSection = (props: IService) => {
  const { image, description, title } = props;

  return (
    <div key={props._key} className="px-4">
      <Image {...image} className="mx-auto h-32 w-32 rounded-full object-cover shadow-xl" alt="" />

      <figure className="-mt-16 rounded-lg border border-gray-900 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-2xl">
        <div className="mx-auto p-4 text-center">
          <p className="mt-16 text-4xl">{title}</p>
          <p className="my-4 font-light tracking-widest">{description}</p>
        </div>
      </figure>
    </div>
  );
};

export default ServiceSection;
