import { IBlog, IReference, ITestimonial } from '_lib/types';

type IBlogSectionProps = IBlog &
  IReference & {
    key: string;
  };

const BlogReferenceSection = (props: IBlogSectionProps) => {
  const {} = props;
  const { key } = props;
  return <h1 key={key}>{JSON.stringify(props)}</h1>;
};

export default BlogReferenceSection;
