import { client } from '_lib/client';
import { IBlog, IHeadingAndTitle, IHero, ITestimonial } from '_lib/types';
import AboutSection from 'Components/AboutSection';
import BlogSection from 'Components/BlogSection';
import Header from 'Components/Header';
import HeadingAndTitle from 'Components/HeadingAndTitle';
import HeroSection from 'Components/HeroSection';
import TestimonialHome from 'Components/TestimonialHome';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[]
  testimonials: ITestimonial[]
  blogs: IBlog[]
}
const IndexPage = (props: IPageProps) => {
  const { content, testimonials, blogs } = props;
  return (
    <>
      <Header />
      {content.map((item) => {
        switch (item._type) {
          case 'Hero':
            return <HeroSection {...item} />;
        }
      })}
      {content.map((item) => {
        switch (item._type) {
          case 'About':
            return <AboutSection {...item} />;
        }
      })}
      {content.map((item) => {
        switch (item._type) {
          case 'HeadingAndTitle':
            return <HeadingAndTitle {...item} />;
        }
      })}
      <TestimonialHome testimonials={testimonials} />
      <BlogSection blogs={blogs} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context
) => {
  const pageQuery = groq`
   *[_type == 'Page' && name == 'Home']
  `;
  const testimonialsQuery = groq`
 *[_type == 'testimonials']
`;
  const blogsQuery = groq`
*[_type == 'blogPost']
`;

  const [pageResponse, testimonialsResponse, blogsResponse] = await Promise.all(
    [
      client.fetch(pageQuery).catch(console.error),
      client.fetch(testimonialsQuery).catch(console.error),
      client.fetch(blogsQuery).catch(console.error),
    ]
  );

  return {
    props: {
      content: pageResponse[0].content,
      testimonials: testimonialsResponse,
      blogs: blogsResponse,
    },
  };
};

export default IndexPage;
