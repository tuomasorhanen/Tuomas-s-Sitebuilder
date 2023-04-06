import { client } from '_lib/client';
import { IPost, ISiteSettings } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import BlogPost from '../../components/blog/BlogPost';
import Header, { IMenuItem } from '../../components/header/Header';

type IPageProps = {
  blog: IPost;
  menu: IMenuItem[];
  settings: ISiteSettings;
};

const Post = (props: IPageProps) => {
  const { blog, menu, settings } = props;
  return (
    <>
      <Header items={menu} />
      <BlogPost {...blog} />
      <style jsx global>{`
        :root {
          --bg-color-light: ${settings.bgColorLight.hex};
          --text-color-light: ${settings.textColorLight.hex};
          --primary-color-light: ${settings.primaryColorLight.hex};
          --secondary-color-light: ${settings.secondaryColorLight.hex};
          --accent-color-light: ${settings.accentColorLight.hex};

          --bg-color-dark: ${settings.bgColorDark.hex};
          --text-color-dark: ${settings.textColorDark.hex};
          --primary-color-dark: ${settings.primaryColorDark.hex};
          --secondary-color-dark: ${settings.secondaryColorDark.hex};
          --accent-color-dark: ${settings.accentColorDark.hex};
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async (context) => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const { slug } = context.query;

  const query = groq`*[_type == 'post' && slug.current == '${slug}'][0]`;

  const menuQuery = groq`*[_type == 'page' && defined(menuOrder)] {
    name,
    slug,
    menuOrder,
  } | order(menuOrder asc)`;

  const siteSettingsQuery = groq`*[_type == 'siteSettings'][0]`;

  const [blog, menu, colors] = await Promise.all([
    client.fetch<IPost>(query),
    client.fetch<IMenuItem[]>(menuQuery),
    client.fetch(siteSettingsQuery),
  ]);

  return {
    props: {
      blog,
      menu,
      settings,
    },
  };
};

export default Post;
