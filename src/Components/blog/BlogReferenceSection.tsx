import { IBlog, IReference, ITestimonial } from '_lib/types';

type IBlogSectionProps = IBlog &
  IReference & {
    key: string;
  };

const BlogReferenceSection = (props: IBlogSectionProps) => {
  const { author, authorImage, excerpt, mainImage, publishedAt, category, readingTime, title } = props;
  const { key } = props;
  return (
    <div key={key} className="aspect-[4/3] h-full">
      <div className="text-center text-sm">
        <img className="m-auto h-16 w-16 rounded-full shadow-xl" src={mainImage} alt="" />
        <h1 className="mt-4 text-3xl ">{title}</h1>
        <p className="mt-4">{excerpt}</p>
        <p className="mt-4">
          {author} / {readingTime}
        </p>
      </div>
    </div>
  );
};

export default BlogReferenceSection;
