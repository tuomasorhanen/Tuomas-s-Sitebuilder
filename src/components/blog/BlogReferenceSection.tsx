import { client } from '_lib/client';
import { IBlog, IReference } from '_lib/types';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

type IBlogSectionProps = IBlog &
  IReference & {
    key: string;
  };

const BlogReferenceSection = (props: IBlogSectionProps) => {
  const { excerpt, image, category, readingTime, title, author } = props;
  const { key } = props;

  const imageProps = useNextSanityImage(client, image);

  return (
    <div key={key} className="px-4">
      <div className="rounded-lg border-2 bg-gray-100">
        <Img {...imageProps} className="h-48 w-full rounded-t-lg object-cover" alt="" />
        <div className="m-4 p-2 text-black">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-4">{excerpt}</p>
          <div className="mt-4">
            <p className="text-sm ">{author}</p>
            <div className=" text-sm text-gray-500">
              <span>
                {readingTime} min &middot; {category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogReferenceSection;
