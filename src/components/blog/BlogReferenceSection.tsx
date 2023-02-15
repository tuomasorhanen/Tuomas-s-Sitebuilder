import { IBlog } from '_lib/types';
import Link from 'next/link';

import Image from '../Image';

const BlogReferenceSection = (props: IBlog) => {
  const { excerpt, image, category, readingTime, title, author, slug } = props;

  return (
    <div key={props._key} className="col-span-12 mx-auto sm:col-span-6 md:col-span-4 lg:col-span-4 ">
      <div className="grid grid-cols-1 gap-6 rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-md ">
        <Image {...image} alt="" className="h-48 w-full rounded-t-lg object-cover" />
        <Link href={`/blog/${slug.current}`}>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
            <p className="mt-2 font-light text-gray-300">{excerpt}</p>
          </div>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-100">{author}</span>
            <span className="text-sm text-gray-400">
              {readingTime} min &middot; {category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogReferenceSection;
