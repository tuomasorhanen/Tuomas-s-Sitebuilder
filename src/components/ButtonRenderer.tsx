import Image from 'components/Image';
import Link from 'next/link';

const ButtonRenderer = ({ btn }) => {

  if (btn.linkType === 'internal') {
    return (
      <Link key={btn._key} href={btn.navigateToPage || '/home'}>
        {btn.image ? (
          <Image {...btn.image} alt="" className="h-16 w-16 object-cover mx-2" />
        ) : (
          <span key={btn._key} className="button">{btn.callToAction}</span>
        )}
      </Link>
    );
  } else if (btn.linkType === 'external') {
    return (
      <a key={btn._key} href={btn.navigateToUrl} >
        {btn.image ? (
          <Image {...btn.image} alt="" className="h-16 w-16 object-cover mx-2" />
        ) : (
          <span key={btn._key} className="button">{btn.callToAction}</span>
        )}
      </a>
    );
  }
  return null;
};

export default ButtonRenderer;
