import {ISimpleImage } from '_lib/types';
import Image from 'components/Image';

const ImageGallery = (props: ISimpleImage) => {
  const { image, style } = props;

  switch (style) {
    case 'square':
      return (
        <div>
        <Image {...image} alt=' ' className='aspect-square w-[800px] shadow-lg object-cover' />
    </div>
      );
    case 'logo-cloud':
      return (
        <div className='py-16'>
        <Image {...image} alt=' ' className='aspect-video h-24 opacity-30 object-contain' />
    </div>
      );

    default:
      return <></>;
  }
};

export default ImageGallery;