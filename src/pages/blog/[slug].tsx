import { client } from '_lib/client';
import { IPost } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import BlogPost from '../../components/blog/BlogPost';
import Header, { IMenuItem } from '../../components/Header';
import { IColor } from '_lib/types';

type IPageProps = {
  blog: IPost;
  menu: IMenuItem[];
  colors: {
    defaultBgColor: IColor;
    defaultTextColor: IColor;
    defaultHighlightColor: IColor;
  };
};

const Post = (props: IPageProps) => {
  const { blog, menu, colors } = props;
  return (
    <>
      <Header items={menu} />
      <BlogPost post={blog} colors={colors} />
      <style jsx global>{`
        body {
          background-color: ${colors.defaultBgColor.hex};
          color: ${colors.defaultTextColor.hex};
          defaultHighlightColor: ${colors.defaultHighlightColor.hex};
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async (context) => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const { slug } = context.query;

  const query = groq`*[_type == 'Post' && slug.current == '${slug}'][0]`;

  const menuQuery = groq`*[_type == 'Page' && defined(menuOrder)] {
    name,
    slug,
    menuOrder,
  } | order(menuOrder asc)`;

  const siteSettingsQuery = groq`*[_type == 'siteSettings'][0] {
    defaultBgColor,
    defaultTextColor,
    defaultHighlightColor
  }`;

  const [blog, menu, colors] = await Promise.all([
    client.fetch<IPost>(query),
    client.fetch<IMenuItem[]>(menuQuery),
    client.fetch(siteSettingsQuery),
  ]);

  return {
    props: {
      blog,
      menu,
      colors,
    },
  };
};

export default Post;
