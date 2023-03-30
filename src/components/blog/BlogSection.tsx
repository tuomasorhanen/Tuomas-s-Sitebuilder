import { ICategory, IPost, IColor, IPerson } from '_lib/types';
import Link from 'next/link';
import Image from '../Image';
import { useState } from 'react';

type BlogSectionProps = {
  blogs: IPost[];
  categories: ICategory[];

};

const BlogSection = ({ blogs, categories}: BlogSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog =>
        blog.categories.some(category => category._ref === selectedCategory)
      )
    : blogs;

  return (
    <div className="bg-bg min-h-screen  mx-auto">
      <div className="flex justify-center mb-6">
        {categories.map(category => (
          <button
            key={category._id}
            className={`mr-2 rounded-full px-3 py-1 ${
              selectedCategory === category._id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedCategory(category._id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-screen-md py-16">
        {filteredBlogs.map(blog => (
          <div key={blog._key}>
            <Image
              {...blog.mainImage}
              alt=""
              className="h-48 w-full rounded-t-lg object-cover"
            />
            <Link href={`/blog/${blog.slug.current}`}>
              <article className="rounded-b-lg border border-gray-500 e p-6 shadow-2xl">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                  {blog.title}
                </h2>
                <p className="mb-5 font-light text-gray-800">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-black">
                      {blog.person.name}
                    </span>
                    <span className="text-black">
                      &middot; {blog.readingTime} min &middot;{' '}
                    </span>
                    <p>{blog.person.name}</p>
                    <p>{blog.person.role}</p>
                    <p>{blog.publishedAt}</p>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}

          </div>
        </div>
  );
};

export default BlogSection;
