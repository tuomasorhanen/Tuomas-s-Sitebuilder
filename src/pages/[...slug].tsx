import { client } from '_lib/client';
import resolveCustomers from '_lib/resolveCustomers';
import resolveLinks from '_lib/resolveLinks';
import resolveReferences from '_lib/resolvers/resolveReferences';
import { IBlog, IColor, IHeadingAndTitle, IHero, ITestimonial } from '_lib/types';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import Header, { IMenuItem } from '../components/Header';
import MapContent from '../components/MapContent';

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[];
  testimonials: ITestimonial[];
  blogs: IBlog[];
  menu: IMenuItem[];
  colors: {
    defaultBgColor: IColor;
    defaultTextColor: IColor;
    defaultHighlightColor: IColor;
  };
};

const IndexPage = (props: IPageProps) => {
  const { content, menu, colors } = props;

  return (
    <>
      <Header items={menu} />
      <MapContent content={content} defaultColors={colors} />
      <style jsx global>{`
        body {
          background-color: ${colors.defaultBgColor.hex};
          color: ${colors.defaultTextColor.hex};
        }
        // Add any other styles using the colors here
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

  const testimonialsQuery = groq`
    *[_type == 'testimonials']
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
  
  const siteSettingsQuery = groq`
  *[_type == 'siteSettings'][0] {
    defaultBgColor,
    defaultTextColor,
    defaultHighlightColor
  }
`;

let [testimonialsResponse, blogsResponse, menuResponse, siteSettingsResponse] = await Promise.all([
  client.fetch(testimonialsQuery),
  client.fetch(blogsQuery),
  client.fetch<IMenuItem[]>(menuQuery),
  client.fetch(siteSettingsQuery),
]);

  // Resolve call to action links in the content
  pageResponse = await resolveLinks(pageResponse);
  pageResponse = await resolveCustomers(pageResponse);

  pageResponse = await resolveReferences(pageResponse);

  return {
    props: {
      content: pageResponse.content,
      testimonials: testimonialsResponse,
      blogs: blogsResponse,
      menu: menuResponse,
      colors: siteSettingsResponse,
    },
  };
};

export default IndexPage;
