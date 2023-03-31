import { client } from '_lib/client';
import resolveLinks from '_lib/resolveLinks';
import resolveReferences from '_lib/resolvers/resolveReferences';
import { IPost, IHeadingAndTitle, IHero, ISiteSettings } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import Header, { IMenuItem } from '../components/header/Header';
import MapContent from '../components/MapContent';

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[];
  blogs: IPost[];
  menu: IMenuItem[];
  settings: ISiteSettings;
};

const IndexPage = (props: IPageProps) => {
  const { content, menu, settings } = props;

  return (
    <>
      <Header items={menu} />
      <MapContent content={content}/>
      <style jsx global>{`
        :root {
          --bg-color: ${settings.defaultBgColor.hex};
          --text-color: ${settings.defaultTextColor.hex};
          --highlight-color: ${settings.defaultHighlightColor.hex};
          --power-color: ${settings.defaultPowerColor.hex};
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');

  let { slug } = context.query;

  const pageQuery = groq`
    *[_type == 'Page' && slug.current == '${slug}'][0]
  `;

  let pageResponse = await client.fetch(pageQuery);

  if (pageResponse == null) {
    return {
      notFound: true,
    };
  }
  const blogsQuery = groq`
    *[_type == 'Post']
  `;

  const menuQuery = groq`
  *[_type == 'Page' && defined(menuOrder)]{
    name,
    slug,
    menuOrder,
  } | order(menuOrder asc)`;
  const siteSettingsQuery = groq`
  *[_type == 'siteSettings'][0]
`;

  let [blogsResponse, menuResponse, siteSettingsResponse] = await Promise.all([
    client.fetch(blogsQuery),
    client.fetch<IMenuItem[]>(menuQuery),
    client.fetch(siteSettingsQuery),
  ]);

  pageResponse = await resolveLinks(pageResponse);
  pageResponse = await resolveReferences(pageResponse);

  return {
    props: {
      content: pageResponse.content,
      blogs: blogsResponse,
      menu: menuResponse,
      settings: siteSettingsResponse,
    },
  };
};

export default IndexPage;
