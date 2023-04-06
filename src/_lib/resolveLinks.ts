import { groq } from 'next-sanity';
import { client } from './client';

const resolveUrl = navResult => {
  if (!navResult || !navResult.slug || !navResult.slug.current) return '';

  let navigateToPage = '';
  switch (navResult._type) {
    case 'page':
      navigateToPage = `${navResult.slug.current}`;
      break;
    case 'blog':
      navigateToPage = `/blog/${navResult.slug.current}`;
      break;
    default:
      break;
  }

  return navigateToPage;
};

const resolveSocialButtons = async (cnt) => {
  if (cnt.buttons) {
    for (let j = 0; j < cnt.buttons.length; j++) {
      const { _ref } = cnt.buttons[j];
      if (cnt.buttons[j]._type === 'reference') {
        const ref = cnt.buttons[j]._ref;
        const buttonQuery = groq`*[_id == '${ref}'][0]{
          _id,
          externalLinkName,
          navigateToUrl,
          image
        }`;
        const buttonResult = await client.fetch(buttonQuery);
        cnt.buttons[j] = buttonResult;
      }
    }
  }
  return cnt;
};

const processButtons = async (cnt) => {
  if (cnt.buttons) {
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
  }
  return cnt;
};

const resolveLinks = async page => {
  if (!page) return null;
  for (let i = 0; i < page.content.length; i++) {
    let cnt = page.content[i];

    if (cnt._type == 'hero' || cnt._type == 'customButton') {
      cnt = await processButtons(cnt);
      page.content[i] = cnt;
    } else if (cnt._type == 'grid') {
      for (let k = 0; k < cnt.items.length; k++) {
        let item = cnt.items[k];
        if (item._type == 'card' || item._type == 'hero') {
          item = await processButtons(item);
          cnt.items[k] = item;
        }
      }
      page.content[i] = cnt;
    } else if (cnt._type == 'socialButton') {
      cnt = await resolveSocialButtons(cnt);
      page.content[i] = cnt;
    }
  }
  return page;
};

export default resolveLinks;
