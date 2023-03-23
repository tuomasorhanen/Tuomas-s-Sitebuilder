import { IBall, ICard, IColor, IGrid, IHero } from '_lib/types';
import HeroSection from 'components/hero/HeroSection';

import Ball from './Ball';
import Card from './Card';

interface GridSectionProps extends IGrid {
  defaultColors: {
    defaultBgColor: IColor;
    defaultTextColor: IColor;
    defaultHighlightColor: IColor;
  };
}

const CardItem = (item: ICard, defaultColors: GridSectionProps['defaultColors']) => {
  return <Card {...item} defaultColors={defaultColors} />;
};

const HeroItem = (item: IHero, defaultColors: GridSectionProps['defaultColors']) => {
  return <HeroSection {...item} defaultColors={defaultColors} />;
};

const BallItem = (item: IBall, defaultColors: GridSectionProps['defaultColors']) => {
  return <Ball {...item} defaultColors={defaultColors} />;
};

const GridSection = (props: GridSectionProps) => {
  const { columns, items, defaultColors } = props;

  const renderGridItem = (item: ICard | IHero) => {
    if (item._type === 'card') {
      return CardItem(item as ICard, defaultColors);
    } else if (item._type === 'Hero') {
      return HeroItem(item as IHero, defaultColors);
    } else if (item._type === 'ball') {
      return BallItem(item as IBall, defaultColors);
    } else {
      return <>void</>;
    }
  };

  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <section className="mt-10">
      <div className={`grid grid-cols-12`}>
        {itemsArray.map(item => (
          <div
            key={item._key}
            className={`col-span-${columns.small} xs:col-span-${columns.medium} md:col-span-${columns.large}`}>
            {renderGridItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
