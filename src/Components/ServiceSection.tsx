import { client } from '_lib/client';
import { IService } from '_lib/types';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

const ServiceSection = (props: IService) => {
  const { image, _type, description, title } = props;
  const imageProps = useNextSanityImage(client, image);

  return (
    <div key={props._key} className="m-4 h-full px-16">
      <div className="text-center text-sm">
        <Img {...imageProps} className="m-auto h-32 w-32 rounded-full shadow-xl" alt="" />
        <h1 className="mt-4 text-3xl ">{title}</h1>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ServiceSection;
