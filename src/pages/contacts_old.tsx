import { client } from "_lib/client";
import { IHeadingAndTitle, IHero } from "_lib/types";
import Header from "Components/Header";
import HeroSection from "Components/hero/HeroSection";
import { GetServerSideProps } from "next";
import { groq } from "next-sanity";

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[];
};
const Contacts = (props: IPageProps) => {
  const { content } = props;
  return (
    <>
      {/* <Header /> */}
      {content.map((item) => {
        switch (item._type) {
          case "Hero":
            return <HeroSection {...item} />;
        }
      })}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context
) => {
  const query = groq`
   *[_type == 'Page' && name == 'Contacts']
  `;
  const response = await client.fetch(query).catch(console.error);

  return {
    props: {
      content: response[0].content,
    },
  };
};

export default Contacts;
