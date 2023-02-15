import { IBlog } from '_lib/types';
import Link from 'next/link';
import { useState } from 'react';

import Image from './Image';

type BlogSectionProps = {
  blogs: IBlog[];
};

const BlogSection = ({ blogs }: BlogSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategories = () => {
    const allCategories = blogs.map(blog => blog.category.toLowerCase());
    const uniqueCategories = [...new Set(allCategories)];
    return uniqueCategories;
  };

  const [categories, setCategories] = useState(getCategories());

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter(blog => blog.category.toLowerCase() === selectedCategory.toLowerCase());

  const addCategory = (category: string) => {
    const newCategory = category.toLowerCase();
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 px-4 sm:px-24">
      <div className="col-start-1 col-end-13">
        <div className="mt-10 flex flex-wrap justify-center">
          <button
            onClick={() => handleCategorySelection('All')}
            className={`mx-2 rounded-full border border-white py-2 px-4 font-medium uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900
            ${selectedCategory === 'All' ? 'bg-white text-gray-900' : 'bg-transparent'}
          `}>
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategorySelection(category)}
              className={`mx-2 rounded-full border border-white py-2 px-4 font-medium uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900
              ${selectedCategory.toLowerCase() === category ? 'bg-white text-gray-900' : 'bg-transparent'}
            `}>
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-12">
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 py-8 sm:px-4 md:grid-cols-2 lg:grid-cols-3 lg:py-16 lg:px-6">
          {filteredBlogs.map(blog => (
            <div key={blog._key}>
              <Image {...blog.image} alt="" className="h-48 w-full rounded-t-lg object-cover" />
              <Link href={`/blog/${blog.slug.current}`}>
                <article className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-md">
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">{blog.title}</h2>
                  <p className="mb-5 font-light text-gray-300">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium dark:text-white">{blog.author}</span>
                      <span>
                        {blog.readingTime} min &middot; {blog.category}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
