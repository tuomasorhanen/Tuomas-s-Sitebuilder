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

  const [columnStyles, setColumnStyles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let numColumns = 1;

      if (screenWidth >= 1920) {
        numColumns = parseInt(columns.large);
      } else if (screenWidth >= 1194) {
        numColumns = parseInt(columns.medium);
      } else {
        numColumns = parseInt(columns.small);
      }

      setColumnStyles({ gridTemplateColumns: `repeat(${numColumns}, 1fr)` });
      
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [columns]);

  const itemsArray = Array.isArray(items) ? items : [items];

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
      return <>Empty grid</>;
    }
  };

  return (
    <section>
      <div className="grid gap-8 max-w-screen-lg mx-auto p-8" style={columnStyles}>
        {itemsArray.map(item => (
          <div key={item._key}>
            {renderGridItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
