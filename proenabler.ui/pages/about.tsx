import { client } from '_lib/client';
import { IHeadingAndTitle, IHero, ITestimonial } from '_lib/types';
import AboutSection from 'Components/AboutSection';
import Header from 'Components/Header';
import HeadingAndTitle from 'Components/HeadingAndTitle';
import HeroSection from 'Components/HeroSection';
import Testimonial from 'Components/Testimonial';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[]
  testimonials: ITestimonial[]
}
const About = (props: IPageProps) => {
  const { content, testimonials } = props;
  return (
    <>
      <Header />
      {content.map((item) => {
        switch (item._type) {
          case 'HeadingAndTitle':
            return <HeadingAndTitle {...item} />;
        }
      })}
      {content.map((item) => {
        switch (item._type) {
          case 'About':
            return <AboutSection {...item} />;
        }
      })}
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

  const [pageResponse, testimonialsResponse] = await Promise.all([
    client.fetch(pageQuery).catch(console.error),
    client.fetch(testimonialsQuery).catch(console.error),
  ]);

  return {
    props: {
      content: pageResponse[0].content,
      testimonials: testimonialsResponse,
    },
  };
};

export default About;
