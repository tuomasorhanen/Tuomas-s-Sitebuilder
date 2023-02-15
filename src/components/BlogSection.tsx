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
    <div className="grid grid-cols-12 gap-6 px-24">
      <div className="col-start-1 col-end-13 -mx-24 -mt-6">
        <div className="mt-10 flex justify-center">
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
        <div className="px-4">
          {filteredBlogs.map(blog => (
            <div key={blog._key} className="mt-6 rounded-lg border-2 bg-gray-100">
              <Image {...blog.image} alt="" className="h-48 w-full rounded-t-lg object-cover" />
              <Link href={`/blog/${blog.slug.current}`}>
                <div className="m-4 p-2 text-black">
                  <h2 className="text-3xl font-bold">{blog.title}</h2>
                  <p className="mt-4">{blog.excerpt}</p>
                  <div className="mt-4">
                    <p className="text-sm ">{blog.author}</p>
                    <div className=" text-sm text-gray-500">
                      <span>
                        {blog.readingTime} min &middot; {blog.category}
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
