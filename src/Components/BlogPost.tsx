import BlockContentRenderer from "_elements/BlockContentRenderer";
import { IBlog } from "_lib/types";
import React from "react";

const BlogPost = ({ blog }) => {
  return (
    <div className="">
      {blog.map((blog: IBlog) => (
        <div key={blog.title} className="bg-white py-12 md:py-20">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-center text-lg lg:max-w-4xl">
              <h1 className="text-4xl text-black">{blog.title}</h1>
              <img
                src={blog.mainImage}
                alt=""
                className=" mx-auto mt-10 h-52 rounded-xl object-cover shadow-xl sm:w-64 lg:w-96"
              />
              <div className="mt-8 text-justify text-xl leading-8 text-gray-900">
                <BlockContentRenderer blocks={blog.body} />
              </div>
              <div className="text-start text-sm text-black">
                <p>{blog.author}</p>
                <time dateTime={blog.publishedAt}>
                  {new Intl.DateTimeFormat("default", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(blog.publishedAt))}
                </time>
                <p>{blog.readingTime} min read</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
