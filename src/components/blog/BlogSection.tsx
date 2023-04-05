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

  console.log('post data:', post);


  return (
    <div className="grid grid-cols-12 mx-auto max-w-screen-lg gap-8 px-4 py-16">
      <div className="rounded-lg borderstyle shadow-lg col-span-12 xs:col-span-6 sm:col-span-4">
        <Image {...mainImage} alt="" className="h-48 w-full rounded-t-lg object-cover" />
        <div className="py-4 px-6">
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
