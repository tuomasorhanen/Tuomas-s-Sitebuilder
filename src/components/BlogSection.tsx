import { IBlog, IReference } from '_lib/types';
import Image from './Image';
import { useState } from 'react';
import { createRandomUUID } from '../sanity/lib/uuid';
import Link from 'next/link';

type IBlogSectionProps = {
  blogs: IBlog[];
};

const BlogSection = ({ blogs, ...props }: IBlogSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const getCategories = () => {
    return Array.from(
      new Set(
        blogs.map(blog => {
          return {
            _id: createRandomUUID(),
            name: blog.category,
          };
        })
      )
    );
  };
  const [categories, setCategories] = useState(getCategories());

  const [shownBlogs, setShownBlogs] = useState(
    blogs.filter(blog => selectedCategory === 'All' || blog.category === selectedCategory)
  );

  const handleCategorySelection = category => {
    setSelectedCategory(category.name);
    setShownBlogs(blogs.filter(blog => category.name === 'All' || blog.category === category.name));
  };
  return (
    <div className="grid grid-cols-12 gap-6 px-24">
      <div className="col-start-1 col-end-13 -mx-24 -mt-6">
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => handleCategorySelection({ name: 'All' })}
            className={`mx-2 rounded-full border border-white py-2 px-4 font-medium uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900
                  ${selectedCategory === 'All' ? 'bg-white text-gray-900' : 'bg-transparent'}
                `}>
            All
          </button>
          {categories.map((category: { _id: string; name: string }) => (
            <button
              key={category._id}
              onClick={() => handleCategorySelection(category)}
              className={`mx-2 rounded-full border border-white py-2 px-4 font-medium uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900
                  ${selectedCategory === category.name ? 'bg-white text-gray-900' : 'bg-transparent'}
                `}>
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-12">
        <div className="px-4">
          {shownBlogs.map(blog => (
            <div className="rounded-lg border-2 bg-gray-100" key={blog._key}>
              <Image {...blog.image} className="h-48 w-full rounded-t-lg object-cover" />
              <Link href={`/blog/${blog.slug.current}`}>
                <div className="m-4 p-2 text-black">
                  <h2 className="text-3xl font-bold">{blog.title}</h2>
                  <p className="mt-4">{blog.excerpt}</p>
                  <div className="mt-4">
                    <p className="text-sm ">{blog.author}</p>
                    <div className=" text-sm text-gray-500">
                      <span>
                        {blog.readingTime} &middot; {blog.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
