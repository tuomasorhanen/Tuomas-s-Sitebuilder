import { client } from '_lib/client';
import { IBlog } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import BlogPost from '../../components/BlogPost';
import Header, { IMenuItem } from '../../components/Header';

type IPageProps = {
  blog: IBlog;
  menu: IMenuItem[];
};

const Post = (props: IPageProps) => {
  const { blog, menu } = props;
  return (
    <>
      <Header items={menu} />
      <BlogPost {...blog} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  let { slug } = context.query;

  const query = groq`
    *[_type == 'blogPost' && slug.current == '${slug}'][0]
  `;

  const menuQuery = groq`
  *[_type == 'Page' && defined(menuOrder)]{
    name,
    slug,
    menuOrder,
  } | order(menuOrder asc)`;

  const [blog, menu] = await Promise.all([client.fetch<IBlog>(query), client.fetch<IMenuItem[]>(menuQuery)]);

  return {
    props: {
      blog,
      menu,
    },
  };
};

export default Post;
