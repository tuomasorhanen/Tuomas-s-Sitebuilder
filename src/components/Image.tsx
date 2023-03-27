import { client } from '_lib/client';
import { ISanityImage } from '_lib/types';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

type IImgProps = {
  className: string;
  alt?: string;
  opacity?: number;
};


const Image = (props: ISanityImage & IImgProps) => {
  const { className, alt, opacity } = props;
  const imageProps = useNextSanityImage(client, props);

  // Apply the opacity as an inline style if it's provided
  const imageStyles = opacity ? { opacity: opacity / 100 } : {};

  return (
    <Img
      key={props.asset._ref}
      {...imageProps}
      className={className}
      alt={alt}
      style={imageStyles}
    />
  );
};

export default Image;
