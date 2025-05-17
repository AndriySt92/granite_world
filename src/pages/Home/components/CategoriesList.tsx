import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { CategoryCard, GridContainer, Text, Title } from '../../../components/common';

interface CategoriesListProps {
  title: string;
  items: {
    title: string;
    image: string;
    path: string;
  }[];
  linkPath: string;
}

const CategoriesList = ({ title, items, linkPath }: CategoriesListProps) => {
  return (
    <div className="spacing-sm">
      <div className="flex items-center justify-between">
        <Title as="h2"> {title}</Title>

        {/* Desktop link - hidden on mobile */}
        <Link
          to={linkPath}
          className="group hidden cursor-pointer items-center transition-colors duration-300 hover:text-primary md:flex"
        >
          <Text as="span" size="xl" weight="bold" className="mr-2" hover="group">
            Дивитися всі категорії
          </Text>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Categories */}
      <GridContainer>
        {items.slice(0, 4).map(({ title, image, path }) => (
          <CategoryCard key={title} title={title} image={image} path={path} />
        ))}
      </GridContainer>

      {/* Mobile link - visible only on mobile */}
      <div className="md:hidden">
        <Link
          to={linkPath}
          className="flex items-center justify-center rounded-md bg-primary py-2 text-light"
        >
          <Text as="span" variant="light" size="xl" weight="normal" className="mr-2">
            Дивитися всі категорії
          </Text>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CategoriesList;
