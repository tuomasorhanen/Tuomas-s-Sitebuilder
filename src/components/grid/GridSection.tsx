import { IBall, ICard, IGrid, IHero, IPerson, IPost } from '_lib/types';
import HeroSection from 'components/hero/HeroSection';
import { useEffect, useState } from 'react';

import Ball from './Ball';
import Card from './Card';
import BlogReferenceSection from 'components/blog/BlogReferenceSection';
import PersonReferenceSection from './PersonReference';

interface GridSectionProps extends IGrid {}

const CardItem = (item: ICard) => {
  return <Card {...item} />;
};
const HeroItem = (item: IHero) => {
  return <HeroSection {...item} />;
};
const BallItem = (item: IBall) => {
  return <Ball {...item} />;
};
const PostItem = (item: IPost) => {
  return <BlogReferenceSection {...item} />;
};
const PersonItem = (item: IPerson) => {
  return <PersonReferenceSection {...item} />;
};

const GridSection = (props: GridSectionProps) => {
  const { columns, items } = props;

  const renderGridItem = (item: ICard | IHero | IBall | IPost | IPerson) => {
    if (item._type === 'card') {
      return CardItem(item as ICard);
    } else if (item._type === 'hero') {
      return HeroItem(item as IHero);
    } else if (item._type === 'ball') {
      return BallItem(item as IBall);
    } else if (item._type === 'post') {
      return PostItem(item as IPost);
    } else if (item._type === 'person') {
      return PersonItem(item as IPerson);
    } else {
      return <>void</>;
    }
  };

  const itemsArray = Array.isArray(items) ? items : [items];

  const [columnStyles, setColumnStyles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1920) {
        setColumnStyles({ gridColumnEnd: `span ${columns.large}` });
      } else if (screenWidth >= 1194) {
        setColumnStyles({ gridColumnEnd: `span ${columns.medium}` });
      } else {
        setColumnStyles({ gridColumnEnd: `span ${columns.small}` });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [columns]);

  return (
    <section className="">
      <div className="grid grid-cols-12 gap-8 max-w-screen-lg mx-auto p-8">
        {itemsArray.map(item => (
          <div key={item._key} style={columnStyles}>
            {renderGridItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
