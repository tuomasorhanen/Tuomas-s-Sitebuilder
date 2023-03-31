import { ICategory } from '_lib/types';

type CategoryFilterProps = {
  categories: ICategory[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
};

const CategoryFilter = (props: CategoryFilterProps) => {
  const { categories, selectedCategory, onCategorySelect } = props;

  return (
    <div className="flex justify-center pt-16">
      {categories.map(category => (
        <button
          key={category._id}
          className={`${
            selectedCategory === category._id
              ? 'button bg-gradient-to-br from-highlight to-power'
              : 'button'
          }`}
          onClick={() => onCategorySelect(category._id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
