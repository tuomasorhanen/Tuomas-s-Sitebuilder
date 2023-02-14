import { IService } from '_lib/types';

import Image from './Image';

const ServiceSection = (props: IService) => {
  const { image, description, title } = props;

  return (
    <div key={props._key} className="sm:px-16">
      <div className="mx-auto my-12 text-center">
        <Image {...image} className="mx-auto h-32 w-32 rounded-full shadow-xl" alt="" />
        <p className="mt-8 text-4xl">{title}</p>
        <p className="mt-4 font-light tracking-widest">{description}</p>
      </div>
    </div>
  );
};

export default ServiceSection;
