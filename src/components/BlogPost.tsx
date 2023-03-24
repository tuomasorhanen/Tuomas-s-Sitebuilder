import { IPost, IPerson, ICategory } from '_lib/types';
import BlockContentRenderer from './BlockContentRenderer';

interface BlogPostProps {
  post: IPost;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const {
    title,
    mainImage,
    person,
    readingTime,
    categories,
    blockContent,
  } = post;

  return (
    <div className="bg-white text-black">
      <div className="sm:-px-6 mx-auto max-w-3xl px-6 pb-12 lg:max-w-4xl xl:max-w-6xl">
        <BlockContentRenderer blockContent={blockContent} />
        <div className="flex items-center space-x-4 pt-12 text-sm text-gray-700">
          <div>
            {person && (
              <>
                <div className="font-semibold">{person.name}</div>
                <div>{person.role}</div>
              </>
            )}
            <div>
              {readingTime} min read &middot; {categories.map((category: ICategory) => category.name).join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
