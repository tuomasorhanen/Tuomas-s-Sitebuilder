import { client } from "_lib/client";
import { IBlog } from "_lib/types";
import BlogPost from "Components/BlogPost";
import Header from "Components/Header";
import { GetServerSideProps } from "next";
import { groq } from "next-sanity";

type IPageProps = {
  blog: IBlog[];
};

const Post = (props: IPageProps) => {
  const { blog } = props;
  return (
    <>
      <Header />
      <BlogPost blog={blog} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context
) => {
  const { params } = context;
  const { id } = params;

  const blogQuery = groq`*[_type == 'blogPost' && slug.current == "${id}" ]`;

  const [blogResponse] = await Promise.all([
    client.fetch(blogQuery).catch(console.error),
  ]);

  return {
    props: {
      blog: blogResponse,
    },
  };
};

export default Post;
