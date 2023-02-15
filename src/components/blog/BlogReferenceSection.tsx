import { IBlog } from '_lib/types';
import Link from 'next/link';

import Image from '../Image';

const BlogReferenceSection = (props: IBlog) => {
  const { excerpt, image, category, readingTime, title, author, slug } = props;

  return (
    <div key={props._key} className="px-4">
      <div className="rounded-lg border-2 bg-gray-100">
        <Image {...image} alt="" className="h-48 w-full rounded-t-lg object-cover" />
        <Link href={`/blog/${slug.current}`}>
          <div className="m-4 p-2 text-black">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-4">{excerpt}</p>
            <div className="mt-4">
              <p className="text-sm ">{author}</p>
              <div className=" text-sm text-gray-500">
                <span>
                  {readingTime} &middot; {category}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogReferenceSection;
