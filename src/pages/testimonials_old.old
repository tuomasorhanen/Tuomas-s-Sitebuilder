import { client } from "_lib/client";
import { IHeadingAndTitle, IHero, ITestimonial } from "_lib/types";
import Header from "Components/Header";
import HeadingAndTitle from "Components/HeadingAndTitle";
import Testimonial from "Components/Testimonial";
import { GetServerSideProps } from "next";
import { groq } from "next-sanity";

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[];
  testimonials: ITestimonial[];
};
const Testimonials = (props: IPageProps) => {
  const { content, testimonials } = props;
  return (
    <>
      <Header />
      {content.map((item) => {
        switch (item._type) {
          case "HeadingAndTitle":
            return <HeadingAndTitle {...item} />;
        }
      })}
      <Testimonial testimonials={testimonials} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context
) => {
  const pageQuery = groq`
   *[_type == 'Page' && name == 'Testimonials']
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

export default Testimonials;
