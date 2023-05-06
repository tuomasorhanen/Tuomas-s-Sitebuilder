import Image from 'components/Image';
import { ICallToAction } from '_lib/types';
import Link from 'next/link';

const ButtonRenderer = (props: ICallToAction) => {
  const { _key, callToAction, linkType, backgroundColor, textColor, image, navigateToPage, navigateToUrl, customColor, chosenCustomColor, border, borderColor } = props;

  const getCssVar = (color: string) => {
    switch (color) {
      case 'light':
        return 'var(--bg-color-light)';
      case 'dark':
        return 'var(--bg-color-dark)';
      case 'accent':
        return 'var(--accent-color)';
      default:
        return color;
    }
  };

  // Customize button styles based on the properties
  const buttonStyle: any = {
    backgroundColor: customColor && chosenCustomColor ? chosenCustomColor.hex : getCssVar(backgroundColor),
    color: getCssVar(textColor),
  };

  if (border) {
    buttonStyle.border = `1px solid ${getCssVar(borderColor)}`;
  }

  if (linkType === 'internal') {
    return (
      <Link href={navigateToPage || '/home'}>
        {image ? (
          <Image {...image} alt="" className={`h-16 w-16 object-cover mx-2 hover:scale-105`} />
        ) : (
          <span className={`button`} style={buttonStyle}>{callToAction}</span>
        )}
      </Link>
    );
  } else if (linkType === 'external') {
    return (
      <a href={navigateToUrl} style={buttonStyle}>
        {image ? (
          <Image {...image} alt="" className={`h-16 w-16 object-cover mx-2 hover:scale-105`} />
        ) : (
          <span className={`button`} style={buttonStyle}>{callToAction}</span>
        )}
      </a>
    );
  }
  return null;
};

export default ButtonRenderer;
