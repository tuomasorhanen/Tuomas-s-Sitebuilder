import {ISimpleImage } from '_lib/types';
import Image from 'components/Image';

const ImageGallery = (props: ISimpleImage) => {
  const { image } = props;

  return (
    <div>
        <Image {...image} alt=' ' className='aspect-square w-[800px] shadow-lg object-cover' />
    </div>
  );
};

export default ImageGallery;