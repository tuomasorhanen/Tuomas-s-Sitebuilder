import { ICategory, IPost } from '_lib/types';
import Link from 'next/link';
import Image from '../Image';

type BlogSectionProps = {
  post: IPost;
  categories: ICategory[];
};

const BlogSection = (props: BlogSectionProps) => {
  const { post} = props;
  const { excerpt, mainImage, readingTime, title, person, slug } = post;

  return (
    <div className="grid grid-cols-12 gap-8 max-w-screen-lg mx-auto p-8">
      <div className="rounded-lg shadow-lg col-span-12 sm:col-span-6 md:col-span-4">
        <Image {...mainImage} alt="" className="h-48 w-full rounded-t-lg object-cover" />
        <div className="px-6 pb-8 pt-4">
          <Link href={`/blog/${slug.current}`}>
            <h2 className="text-2xl font-bold">{title}</h2>
          </Link>
          <p className="mt-2">{excerpt}</p>
          <div className="flex mt-4">
            <Image {...person.image} alt={person.name} className="h-16 w-16 rounded-full shadow-md mr-4" />
            <div className="flex flex-col text-opacity-50">
              <p>{readingTime} min read</p>
              <p>{person.name}</p>
              <p>{person.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
