import { client } from '_lib/client';
import { IBlog } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import BlogPost from '../../components/BlogPost';
import Header, { IMenuItem } from '../../components/Header';

type IPageProps = {
  blog: IBlog[];
  menu: IMenuItem[];
};

const Post = (props: IPageProps) => {
  const { blog, menu } = props;
  return (
    <>
      <Header items={menu} />
      <BlogPost blog={blog} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const blogsQuery = groq`
    *[_type == 'blogPost']
  `;

  const menuQuery = groq`
  *[_type == 'Page' && defined(menuOrder)]{
    name,
    slug,
    menuOrder,
  } | order(menuOrder asc)`;

  const [blogsResponse, menuResponse] = await Promise.all([
    client.fetch(blogsQuery).catch(console.error),
    client.fetch<IMenuItem[]>(menuQuery),
  ]);

  blogsResponse.map(blog => {
    blog.publishedAt = new Intl.DateTimeFormat('default', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(blog.publishedAt));
  });

  return {
    props: {
      blog: blogsResponse,
      menu: menuResponse,
    },
  };
};

export default Post;
