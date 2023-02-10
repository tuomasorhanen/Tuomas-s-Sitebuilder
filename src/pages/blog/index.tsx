import { client } from '_lib/client';
import { IBlog, IHeadingAndTitle, IHero } from '_lib/types';
import BlogSection from 'components/BlogSection';
import Header, { IMenuItem } from 'components/Header';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';

type IPageProps = {
  blogs: IBlog[];
  menu: IMenuItem[];
};
const Blogs = (props: IPageProps) => {
  const { blogs, menu } = props;
  return (
    <>
      <Header items={menu} />
      <BlogSection blogs={blogs} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const pageQuery = groq`
    *[_type == 'Page' && name == 'Blog']
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

  const [pageResponse, blogsResponse, menuResponse] = await Promise.all([
    client.fetch(pageQuery).catch(console.error),
    client.fetch(blogsQuery).catch(console.error),
    client.fetch<IMenuItem[]>(menuQuery),
  ]);

  blogsResponse.map(blog => {
    blog.publishedAt = new Intl.DateTimeFormat('default', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(blog.publishedAt));
  });

  return {
    props: {
      blogs: blogsResponse,
      menu: menuResponse,
    },
  };
};

export default Blogs;
