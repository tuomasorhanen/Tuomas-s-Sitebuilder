import { IPost } from '_lib/types';
import Link from 'next/link';

import Image from '../Image';

const BlogReferenceSection = (props: IPost) => {
  const { excerpt, categories, mainImage, publishedAt, readingTime, title, person, slug } = props;

  return (
    <div key={props._key} className="col-span-12 mx-auto p-4 sm:col-span-6 md:col-span-4 lg:col-span-4 ">
      <div className="grid grid-cols-1 rounded-lg border border-gray-300 bg-gray-100 shadow-md ">
        <Image {...mainImage} alt="" className="h-48 w-full rounded-t-lg object-cover" />
        <div className="py-4 px-6">
          <Link href={`/blog/${slug.current}`}>
            <h2 className="text-2xl font-bold tracking-tight text-black">{title}</h2>
            <p className="mt-2 font-light text-gray-600">{excerpt}</p>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-800">{person.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogReferenceSection;
