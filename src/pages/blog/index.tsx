import { client } from '_lib/client';
import { ICategory, IPost } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import BlogSection from '../../components/BlogSection';
import Header, { IMenuItem } from '../../components/Header';

type IPageProps = {
  blogs: IPost[];
  categories: ICategory[];
  menu: IMenuItem[];
};

const Blogs = (props: IPageProps) => {
  const { blogs, menu, categories } = props;
  return (
    <>
      <Header items={menu} />
      <BlogSection blogs={blogs} categories={categories} />
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

const [pageResponse, blogsResponse, menuResponse, categoriesResponse] = await Promise.all([
  client.fetch(pageQuery).catch(console.error),
  client.fetch(blogsQuery).catch(console.error),
  client.fetch<IMenuItem[]>(menuQuery),
  client.fetch(categoriesQuery).catch(console.error),
]);

return {
  props: {
    blogs: blogsResponse,
    menu: menuResponse,
    categories: categoriesResponse,
  },
};

};

export default Blogs;
