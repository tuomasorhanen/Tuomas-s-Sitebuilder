import { IBlog, IBlogHeading, IBlogImage, IBlogParagraph } from '_lib/types';

import Image from './Image';

const BlogPost = ({ content }: IBlog) => {
  return (
    <div className="bg-white text-black">
      <div className="sm:-px-6 mx-auto max-w-3xl px-6 lg:max-w-4xl xl:max-w-6xl">
        {content.map(item => {
          switch (item._type) {
            case 'BlogHeading':
              const heading = item as IBlogHeading;
              let headingClass = 'text-lg font-bold';
              switch (heading.level) {
                case 1:
                  headingClass = 'text-3xl font-bold text-center py-10';
                  break;
                case 2:
                  headingClass = 'text-xl font-bold';
                  break;
                case 3:
                  headingClass = 'text-xl font-medium';
                  break;
                case 4:
                  headingClass = 'text-lg font-medium';
                  break;
                case 5:
                  headingClass = 'text-md font-bold';
                  break;
                case 6:
                  headingClass = 'text-sm font-bold';
                  break;
                default:
                  break;
              }
              return (
                <div key={heading._key}>
                  <h2 className={`pt-12 ${headingClass}`}>{heading.text}</h2>
                </div>
              );
            case 'BlogParagraph':
              const paragraph = item as IBlogParagraph;
              let paragraphClass = 'text-md';
              switch (paragraph.style) {
                case 'normal':
                  paragraphClass = 'text-md';
                  break;
                case 'quote':
                  paragraphClass = 'text-lg italic border-l-4 pl-4';
                  break;
                default:
                  break;
              }
              return (
                <div key={paragraph._key}>
                  <h2 className={`mt-4 ${paragraphClass}`}>{paragraph.text}</h2>
                </div>
              );
            case 'BlogImage':
              const image = item as IBlogImage;
              return (
                <div key={image._key}>
                  <Image {...image.image} alt="" className=" mt-4 h-full object-cover" />
                  <p className="text-sm font-medium tracking-widest">{image.description}</p>
                </div>
              );
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default BlogPost;
