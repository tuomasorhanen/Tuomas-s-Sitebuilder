import { IGrid, ICard, IHero, IColor } from '_lib/types';

import Card from './Card';
import HeroSection from 'components/hero/HeroSection';

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
  
const GridSection = (props: GridSectionProps) => {
  const { title, columns, items, defaultColors } = props;

  const renderGridItem = (item: ICard | IHero) => {
    if (item._type === 'card') {
      return CardItem(item as ICard, defaultColors);
    } else if (item._type === 'Hero') {
      return HeroItem(item as IHero, defaultColors);
    } else {
      return <>void</>;
    }
  };
  
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <section className="mt-10">
      <div
        className={`grid grid-cols-${columns.small} xs:grid-cols-${columns.medium} md:grid-cols-${columns.large} gap-4`}
      >
        {itemsArray.map((item) => (
          <div key={item._key} className="grid-item">
            {renderGridItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;