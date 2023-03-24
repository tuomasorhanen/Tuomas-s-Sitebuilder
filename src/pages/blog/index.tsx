import { client } from '_lib/client';
import { ICategory, IColor, IPost } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import BlogSection from '../../components/blog/BlogSection';
import Header, { IMenuItem } from '../../components/Header';

type IPageProps = {
  blogs: IPost[];
  categories: ICategory[];
  menu: IMenuItem[];
  colors: {
    defaultBgColor: IColor;
    defaultTextColor: IColor;
    defaultHighlightColor: IColor;
  };
};

const Blogs = (props: IPageProps) => {
  const { blogs, menu, categories, colors } = props;
  return (
<>
  <Header items={menu} />
  <BlogSection blogs={blogs} categories={categories} colors={colors} />
  <style jsx global>{`
    body {
      background-color: ${colors.defaultBgColor.hex};
      color: ${colors.defaultTextColor.hex};
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
    *[_type == 'Post']
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
    defaultHighlightColor
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
    colors: siteSettingsResponse,
  },
};
};

export default Blogs;
