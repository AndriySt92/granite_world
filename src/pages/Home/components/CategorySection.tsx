import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import CategorySectionItem from './CategorySectionItem';

interface CategorySectionProps {
  title: string;
  items: {
    name: string;
    image: string;
  }[];
}

const CategorySection = ({ title, items }: CategorySectionProps) => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-main text-4xl font-extrabold uppercase first-letter:text-primary">
          {title}
        </h2>
        <Link
          to="/categories"
          className="flex items-center font-main text-xl font-semibold text-dark transition-colors hover:text-primary"
        >
          <span className="mr-2">Дивитися всі категорії</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.slice(0, 4).map(({ name, image }) => (
          <CategorySectionItem key={name} name={name} image={image} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
