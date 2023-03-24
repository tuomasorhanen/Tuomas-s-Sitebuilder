import { IBall, ICard, IGrid, IHero } from '_lib/types';
import HeroSection from 'components/hero/HeroSection';
import { useEffect, useState } from 'react';

import Ball from './Ball';
import Card from './Card';

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

const GridSection = (props: GridSectionProps) => {
  const { columns, items } = props;

  const renderGridItem = (item: ICard | IHero | IBall) => {
    if (item._type === 'card') {
      return CardItem(item as ICard);
    } else if (item._type === 'Hero') {
      return HeroItem(item as IHero);
    } else if (item._type === 'ball') {
      return BallItem(item as IBall);
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

    handleResize(); // Initialize column styles on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [columns]);

  return (
    <section className="bg-bg">
      <div className="grid grid-cols-12">
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
