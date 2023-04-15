import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { IPage } from '_lib/types';

const resolveReferences = async (page: IPage) => {
  const { content } = page;

  const resolvedContent = await Promise.all(
    content.map(async (item: any) => {
      const { _type } = item;

      switch (_type) {
        case 'reference':
          if (item._ref) {
            const botQry = groq`*[_id == '${item._ref}']{
              _type,
              title,
              tenantId,
              instanceId,
              subscriptionKey
            }[0]`;
            const botData = await client.fetch(botQry);
            return botData;
          }
          break;
        case 'carousel':
          item.items = await Promise.all(
            item.items.map(async (carouselItem: any) => {
              if (carouselItem._type === 'hero' && carouselItem.buttons) {
                carouselItem.buttons = await Promise.all(
                  carouselItem.buttons.map(async (button: any) => {
                    const { _ref } = button;
                    if (_ref) {
                      const buttonQry = groq`*[_id == '${_ref}']{
                        callToAction,
                        navigateToPage,
                        linkType,
                        navigateToUrl,
                        image,
                        backgroundColor
                      }[0]`;
                      const buttonData = await client.fetch(buttonQry);
                      return buttonData;
                    } else {
                      return button;
                    }
                  })
                );
              }
              return carouselItem;
            })
          );
          break;
        case 'grid':
          item.items = await Promise.all(
            item.items.map(async (gridItem: any) => {
              const { _ref } = gridItem;
              if (gridItem._type === 'blog' && _ref) {
                const blogQry = groq`*[_id == '${_ref}']{
                  _id,
                  title,
                  excerpt,
                  mainImage,
                  slug,
                  person,
                  ...
                }[0]`;
                const blogData = await client.fetch(blogQry);

                // Fetch person data separately
                if (blogData.person && blogData.person._ref) {
                  const personQry = groq`*[_id == '${blogData.person._ref}']{
                    _id,
                    name,
                    role,
                    image,
                    _type,
                    email,
                    number
                  }[0]`;
                  const personData = await client.fetch(personQry);
                  blogData.person = personData;
                }
                return blogData;
              } else if (gridItem._type === 'person' && _ref) {
                const personQry = groq`*[_id == '${_ref}']{
                  _id,
                  name,
                  role,
                  image,
                  _type,
                  email,
                    number
                }[0]`;
                const personData = await client.fetch(personQry);
                return personData;
              } else {
                return gridItem;
              }
            })
          );
          break;
        case 'blog':
          if (item.person && item.person._ref) {
            const personQry = groq`*[_id == '${item.person._ref}']{
              _id,
              name,
              role,
              image
            }[0]`;
            const personData = await client.fetch(personQry);
            item.person = personData;
          }
          break;
        case 'person':
          break;
        default:
          break;
      }

      return item;
    })
  );

  page.content = resolvedContent;
  return page;
};

export default resolveReferences;
