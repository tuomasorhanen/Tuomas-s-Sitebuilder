import { client } from '_lib/client';
import { IService } from '_lib/types';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

const ServiceSection = (props: IService) => {
  const { image, _type, description, title } = props;
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className="sm:px-16">
      <div key={props._key} className="mx-auto my-12 text-center">
        <Img {...imageProps} className="mx-auto h-32 w-32 rounded-full shadow-xl" alt="" />
        <h2 className="mt-8 text-4xl">{title}</h2>
        <h2 className="mt-4 font-light tracking-widest">{description}</h2>
      </div>
    </div>
  );
};

export default ServiceSection;
