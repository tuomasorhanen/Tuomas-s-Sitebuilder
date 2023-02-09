import { client } from "_lib/client";
import { IHeadingAndTitle, IHero, IService } from "_lib/types";
import CustomButton from "Components/Button";
import Header from "Components/Header";
import HeadingAndTitle from "Components/HeadingAndTitle";
import Service from "Components/Service";
import { GetServerSideProps } from "next";
import { groq } from "next-sanity";

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[];
  services: IService[];
};
const About = (props: IPageProps) => {
  const { content, services } = props;
  return (
    <>
      {/* <Header /> */}
      {content.map((item) => {
        switch (item._type) {
          case "HeadingAndTitle":
            return <HeadingAndTitle {...item} />;
        }
      })}
      <Service services={services} />
      {content.map((item) => {
        switch (item._type) {
          case "Button":
            return <CustomButton {...item} />;
        }
      })}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context
) => {
  const pageQuery = groq`
   *[_type == 'Page' && name == 'Palvelut']
  `;
  const servicesQuery = groq`
 *[_type == 'services']
`;

  const [pageResponse, servicesResponse] = await Promise.all([
    client.fetch(pageQuery).catch(console.error),
    client.fetch(servicesQuery).catch(console.error),
  ]);

  return {
    props: {
      content: pageResponse[0].content,
      services: servicesResponse,
    },
  };
};

export default About;
