import { groq } from 'next-sanity';
import { client } from './client';

const resolveUrl = navResult => {
  let navigateToPage = '';
  switch (navResult._type) {
    case 'Page':
      navigateToPage = `${navResult.slug.current}`;
      break;
    case 'Blog':
      navigateToPage = `/blog/${navResult.slug.current}`;
      break;
    default:
      break;
  }

  return navigateToPage;
};

const resolveLinks = async page => {
  if (!page) return null;
  for (let i = 0; i < page.content.length; i++) {
    let cnt = page.content[i];
    if (cnt._type == 'Hero' && cnt.buttons) {
      for (let j = 0; j < cnt.buttons.length; j++) {
        const { _ref } = cnt.buttons[j];
        if (cnt.buttons[j]._type == 'reference') {
          const ref = cnt.buttons[j]._ref;
          const ctaQuery = groq`*[_id == '${ref}'][0]`;
          const ctaResult = await client.fetch(ctaQuery);
          const { callToAction } = ctaResult;
          const navQuery = groq`*[_id == '${_ref}']{
                navigateToPage->
              }[0].navigateToPage
              `;
          const navResult = await client.fetch(navQuery);
          const navigateToPage = resolveUrl(navResult);
          cnt.buttons[j] = {
            callToAction,
            navigateToPage,
          };
        }
      }
      page.content[i] = cnt;
    }
  }
  return page;
};

export default resolveLinks;
