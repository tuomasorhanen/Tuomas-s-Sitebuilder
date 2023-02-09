import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { IPage } from '_lib/types';

const resolveReferences = async (page: IPage) => {
  const { content } = page;

  for (let i = 0; i < content.length; i++) {
    let item = content[i] as any;

    const { _ref, _type } = item;
    if (!_ref) continue;

    let qry = groq`*[_id == '${_ref}']{
        ...
    }[0]`;

    switch (_type) {
      case 'Testimonial':
        qry = groq`*[_id == '${_ref}']{
            ...,
            company->,
            person->
        }[0]`;
        break;
      case 'blogPost':
        break;

      default:
        break;
    }

    console.log(qry);
    item = await client.fetch(qry);
    console.log(item);
    item._ref = _ref;

    content[i] = item as any;
  }

  page.content = content;
  return page;
};

export default resolveReferences;
