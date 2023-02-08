import { IBlog } from '_lib/types';
import React, { useState } from 'react';

const BlogSection = ({ blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="bg-gray-900 lg:relative lg:z-10 lg:pb-0">
      <div className=" py-12 text-center text-white md:py-20 lg:mx-auto lg:max-w-7xl ">
        <h2 className="pb-2 text-4xl font-medium">Blogi</h2>
        <h2 className="px-6 text-xl font-light tracking-widest md:px-20 lg:px-64 xl:px-80">
          Lue viimeaikaisia ajatuksiani
        </h2>
      </div>

      <div className="relative bg-gray-900 px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => handleCategorySelection('All')}
              className={`mx-2 rounded-full border border-white py-2 px-4 font-medium uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900
                  ${
                    selectedCategory === 'All'
                      ? 'bg-white text-gray-900'
                      : 'bg-transparent'
                  }
                `}
            >
              All
            </button>
            {categories.map((category: string) => (
              <button
                key={category}
                onClick={() => handleCategorySelection(category)}
                className={`mx-2 rounded-full border border-white py-2 px-4 font-medium uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900
                  ${
                    selectedCategory === category
                      ? 'bg-white text-gray-900'
                      : 'bg-transparent'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-2 lg:max-w-7xl lg:grid-cols-3">
          {blogs
            .filter(
              (blog) =>
                selectedCategory === 'All' || blog.category === selectedCategory
            )
            .map((blog: IBlog) => (
              <div
                key={blog.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={blog.mainImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <a href={`/blog/${blog.slug.current}`} className="block">
                      <p className="text-xl font-semibold text-gray-900">
                        {blog.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {blog.excerpt}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{blog.author}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={blog.authorImage}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {blog.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={blog.publishedAt}>
                          {new Intl.DateTimeFormat('default', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }).format(new Date(blog.publishedAt))}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{blog.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
