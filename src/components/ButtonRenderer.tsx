import Image from 'components/Image';
import { ICallToAction } from '_lib/types';
import Link from 'next/link';

const ButtonRenderer = (props: ICallToAction) => {
  const { _key, callToAction, linkType, backgroundColor, image, navigateToPage, navigateToUrl } = props;

  const buttonStyle = {
    backgroundColor: `var(--${backgroundColor}-color-light)`,
    color: 'white',
  };

  if (linkType === 'internal') {
    return (
      <Link key={props._key} href={navigateToPage || '/home'}>
        {image ? (
          <Image {...image} alt="" className={`h-16 w-16 object-cover mx-2`} />
        ) : (
          <span key={props._key} className={`button`} style={buttonStyle}>{callToAction}</span>
        )}
      </Link>
    );
  } else if (linkType === 'external') {
    return (
      <a key={props._key} href={navigateToUrl} style={buttonStyle}>
        {image ? (
          <Image {...image} alt="" className={`h-16 w-16 object-cover mx-2`} />
        ) : (
          <span key={props._key} className={`button`} style={buttonStyle}>{callToAction}</span>
        )}
      </a>
    );
  }
  return null;
};

export default ButtonRenderer;
