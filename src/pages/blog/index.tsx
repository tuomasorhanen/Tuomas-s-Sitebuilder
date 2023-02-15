import { client } from '_lib/client';
import { IBlog } from '_lib/types';
import MyFooter from 'components/Footer';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import BlogSection from '../../components/BlogSection';
import Header, { IMenuItem } from '../../components/Header';

type IPageProps = {
  blogs: IBlog[];
  menu: IMenuItem[];
};

const Blogs = (props: IPageProps) => {
  const { blogs, menu } = props;
  return (
    <>
      <Header items={menu} />
      <BlogSection blogs={blogs} />
      <MyFooter items={menu} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const pageQuery = groq`
    *[_type == 'Page' && name == 'Blog']
  `;
  const blogsQuery = groq`
    *[_type == 'blogPost']
  `;

  const menuQuery = groq`
  *[_type == 'Page' && defined(menuOrder)]{
    name,
    slug,
    menuOrder,
  } | order(menuOrder asc)`;

  const [pageResponse, blogsResponse, menuResponse] = await Promise.all([
    client.fetch(pageQuery).catch(console.error),
    client.fetch(blogsQuery).catch(console.error),
    client.fetch<IMenuItem[]>(menuQuery),
  ]);

  return {
    props: {
      blogs: blogsResponse,
      menu: menuResponse,
    },
  };
};

export default Blogs;
