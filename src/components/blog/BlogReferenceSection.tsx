import { IPost } from '_lib/types';
import Link from 'next/link';
import Image from 'components/Image';

const BlogReferenceSection = (props: IPost) => {
  const { excerpt, mainImage, readingTime, title, person, slug } = props;

  return (
    <div key={props._key} className="py-16">
      <div className="rounded-lg borderstyle shadow-lg">
        <Image {...mainImage} alt="" className="h-48 w-full rounded-t-lg object-cover" />
        <div className="py-4 px-6">
          <Link href={`/blog/${slug.current}`}>
            <h2 className="text-2xl font-bold">{title}</h2>
          <p className='mt-2'>{excerpt}</p>
          </Link>
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

export default BlogReferenceSection;
