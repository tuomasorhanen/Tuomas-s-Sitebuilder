import { client } from '_lib/client';
import { ICategory, IColor, IPost, ISiteSettings } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';
import { useState } from 'react';

import BlogSection from '../../components/blog/BlogSection';
import Header, { IMenuItem } from '../../components/header/Header';
import CategoryFilter from 'components/blog/CategoryFilter';

type IPageProps = {
  blogs: IPost[];
  categories: ICategory[];
  menu: IMenuItem[];
  settings: ISiteSettings;
};

const Blogs = (props: IPageProps) => {
  const { blogs, menu, categories, settings } = props;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog =>
        blog.categories.some(category => category._ref === selectedCategory)
      )
    : blogs;

  return (
    <>
      <Header items={menu} />
      <div className="container mx-auto">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        {filteredBlogs.map((post) => (
          <BlogSection key={post._key} post={post} categories={categories} />
        ))}
      </div>
      <style jsx global>{`
        :root {
          --bg-color: ${settings.bgColor.hex};
          --text-color: ${settings.textColor.hex};
          --primary-color: ${settings.primaryColor.hex};
          --secondary-color: ${settings.secondaryColor.hex};
          --accent-color: ${settings.accentColor.hex};
        }
      `}</style>
    </>
  );
};


export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
    context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const pageQuery = groq`
    *[_type == 'Page' && name == 'Blog']
  `;
const blogsQuery = groq`
*[_type == 'Post']{
  _id,
  _key,
  excerpt,
  mainImage,
  readingTime,
  title,
  slug,
  categories,
  person->{
    _id,
    name,
    role,
    image
  }
}
`;
  const categoriesQuery = groq`
  *[_type == 'category']
`;
  const menuQuery = groq`
  *[_type == 'Page' && defined(menuOrder)]{
    name,
    slug,
    menuOrder,
  } | order(menuOrder asc)`;

const siteSettingsQuery = groq`
  *[_type == 'siteSettings'][0] {
    defaultBgColor,
    defaultTextColor,
    defaultHighlightColor,
    defaultPowerColor
  }
`;

let [pageResponse, blogsResponse, menuResponse, categoriesResponse, siteSettingsResponse] = await Promise.all([
  client.fetch(pageQuery).catch(console.error),
  client.fetch(blogsQuery).catch(console.error),
  client.fetch<IMenuItem[]>(menuQuery),
  client.fetch(categoriesQuery).catch(console.error),
  client.fetch(siteSettingsQuery),
]);

return {
  props: {
    blogs: blogsResponse,
    menu: menuResponse,
    categories: categoriesResponse,
    settings: siteSettingsResponse,
  },
};
};

export default Blogs;
