import { IBlog, IBlogHeading, IBlogImage,IBlogParagraph } from '_lib/types';

import Image from './Image';

const BlogPost = ({ content }: IBlog) => {
  return (
    <div className="">
      {content.map(item => {
        switch (item._type) {
          case 'BlogHeading':
            const heading = item as IBlogHeading;
            return (
              <div key={heading._key} className="max-w-7xl text-center">
                <h2 className="text-4xl">{heading.text}</h2>
              </div>
            );
          case 'BlogParagraph':
            const paragraph = item as IBlogParagraph;
            return (
              <div key={paragraph._key} className="max-w-7xl text-center">
                <h2 className="text-xl">{paragraph.text}</h2>
              </div>
            );
          case 'BlogImage':
            const image = item as IBlogImage;
            return (
              <div key={image._key} className="flex max-w-7xl justify-center">
                <Image {...image.image} alt="" className="h-full object-cover" />
              </div>
            );
          default:
            return <pre>{JSON.stringify(item, null, 2)}</pre>;
        }
      })}
    </div>
  );
};

export default BlogPost;
