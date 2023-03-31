import { IPost, IPerson, ICategory, } from '_lib/types';
import BlockContentRenderer from '../BlockContentRenderer';


const BlogPost = (props: IPost) => {
  const {
    person,
    readingTime,
    categories,
    blockContent,
  } = props;

  return (
    <div className="">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
