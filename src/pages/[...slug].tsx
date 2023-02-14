import { client } from '_lib/client';
import resolveCustomers from '_lib/resolveCustomers';
import resolveLinks from '_lib/resolveLinks';
import resolveReferences from '_lib/resolvers/resolveReferences';
import { IBlog, IHeadingAndTitle, IHero, ITestimonial } from '_lib/types';

import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

import MapContent from '../components/MapContent';
import Header, { IMenuItem } from '../components/Header';
import MyFooter from '../components/Footer';

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[];
  testimonials: ITestimonial[];
  blogs: IBlog[];
  menu: IMenuItem[];
};
const IndexPage = (props: IPageProps) => {
  const { content, menu } = props;

  return (
    <>
      <Header items={menu} />
      <MapContent content={content} />
      <MyFooter items={menu} />
      {/* <TestimonialHome testimonials={testimonials} />
      <BlogSection blogs={blogs} /> */}
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

  let [testimonialsResponse, blogsResponse, menuResponse] = await Promise.all([
    client.fetch(testimonialsQuery),
    client.fetch(blogsQuery),
    client.fetch<IMenuItem[]>(menuQuery),
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
    },
  };
};

export default IndexPage;
