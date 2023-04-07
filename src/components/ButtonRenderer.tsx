import Image from 'components/Image';
import Link from 'next/link';

const ButtonRenderer = ({ btn }) => {
  if (btn.linkType === 'internal') {
    return (
      <Link key={btn.navigateToPage} href={btn.navigateToPage || '/home'}>
        {btn.image ? (
          <Image {...btn.image} alt="" className="h-12 w-12 object-cover" />
        ) : (
          <span className="button">{btn.callToAction}</span>
        )}
      </Link>
    );
  } else if (btn.linkType === 'external') {
    return (
      <a key={btn.navigateToUrl} href={btn.navigateToUrl} >
        {btn.image ? (
          <Image {...btn.image} alt="" className="h-12 w-12 object-cover" />
        ) : (
          <span className="button">{btn.callToAction}</span>
        )}
      </a>
    );
  }
  return null;
};

export default ButtonRenderer;
