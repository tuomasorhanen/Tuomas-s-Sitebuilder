import { client } from '_lib/client';
import { ISanityImage } from '_lib/types';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

type IImgProps = {
  className: string;
  alt?: string;
};

const Image = (props: ISanityImage & IImgProps) => {
  const { className, alt } = props;
  const imageProps = useNextSanityImage(client, props);

  return <Img key={props.asset._ref} {...imageProps} className={className} alt={alt} />;
};

export default Image;
