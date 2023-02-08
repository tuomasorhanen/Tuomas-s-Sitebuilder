import { client } from '_lib/client';
import { IBlog, IHeadingAndTitle, IHero } from '_lib/types';
import BlogSection from 'Components/BlogSection';
import Header from 'Components/Header';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

type IPageProps = {
  content: IHero[] | IHeadingAndTitle[]
  blogs: IBlog[]
}
const Blogs = (props: IPageProps) => {
  const { blogs } = props;
  return (
    <>
      <Header />
      <BlogSection blogs={blogs} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context
) => {
  const pageQuery = groq`
   *[_type == 'Page' && name == 'Blog']
  `;
  const blogsQuery = groq`
 *[_type == 'blogPost']
`;

  const [pageResponse, blogsResponse] = await Promise.all([
    client.fetch(pageQuery).catch(console.error),
    client.fetch(blogsQuery).catch(console.error),
  ]);

  blogsResponse.map(blog => {
    blog.publishedAt = new Intl.DateTimeFormat('default', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(blog.publishedAt))
  })

  return {
    props: {
      content: pageResponse[0].content,
      blogs: blogsResponse,
    },
  };
};

export default Blogs;
