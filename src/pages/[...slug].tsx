import { client } from '_lib/client';
import resolveLinks from '_lib/resolveLinks';
import resolveReferences from '_lib/resolvers/resolveReferences';
import { IPost, IHeadingAndTitle, IHero, ISiteSettings} from '_lib/types';
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
      <Header items={menu} settings={settings} />
      <MapContent content={content}/>
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

export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');

  let { slug } = context.query;

  const pageQuery = groq`
    *[_type == 'page' && slug.current == '${slug}'][0]
  `;

  let pageResponse = await client.fetch(pageQuery);

  if (pageResponse == null) {
    return {
      notFound: true,
    };
  }
  const blogsQuery = groq`
    *[_type == 'post']
  `;
  const menuQuery = groq`
  *[_type == 'page' && defined(menuOrder)]{
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
