import React, { useState } from 'react';
import { createRandomUUID } from '../sanity/lib/uuid';
import BlogReferenceSection from './blog/BlogReferenceSection';
import { IBlog } from '_lib/types';

const BlogSection = ({ blogs }) => {
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
  };
  return (
    <div className="">
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => handleCategorySelection('All')}
          className={`mx-2 rounded-full border border-white py-2 px-4 font-medium uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900
                  ${selectedCategory === 'All' ? 'bg-white text-gray-900' : 'bg-transparent'}
                `}>
          All
        </button>
        {categories.map((category: { _id: string; name: string }) => (
          <button
            key={category._id}
            onClick={() => handleCategorySelection(category.name)}
            className={`mx-2 rounded-full border border-white py-2 px-4 font-medium uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900
                  ${selectedCategory === category.name ? 'bg-white text-gray-900' : 'bg-transparent'}
                `}>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
