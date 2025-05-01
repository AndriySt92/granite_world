import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from './components/ProductCard';

interface ProductItem {
  name: string;
  image: string;
}

interface ProductCategory {
  title: string;
  items: ProductItem[];
}

type ProductsData = Record<string, ProductCategory>;

const productsData: ProductsData = {
  'single-monuments': {
    title: 'Одинарні пам’ятники',
    items: Array(12).fill({
      name: 'Одинарний пам’ятник №1',
      image: 'https://granit-royalstone.com/wp-content/uploads/2023/05/m94.jpg',
    }),
  },
  'double-monuments': {
    title: 'Двійні пам’ятники',
    items: Array(10).fill({
      name: 'Подвійний пам’ятник №1',
      image: 'https://granit-royalstone.com/wp-content/uploads/2023/05/m94.jpg',
    }),
  },
  'triple-monuments': {
    title: 'Трійні пам’ятники',
    items: Array(8).fill({
      name: 'Потрійний пам’ятник №1',
      image: 'https://granit-royalstone.com/wp-content/uploads/2023/05/m94.jpg',
    }),
  },
  'military-monuments': {
    title: 'Пам’ятники для військових',
    items: Array(8).fill({
      name: 'Пам’ятник для військових №1',
      image: 'https://granit-royalstone.com/wp-content/uploads/2023/05/m94.jpg',
    }),
  },
};

const Products = () => {
  const { category } = useParams<{ category: keyof typeof productsData }>();
  const [productsList, setProductsList] = useState<ProductItem[]>([]);
  const [produtsTitle, setProductsTitle] = useState<string>('');

  useEffect(() => {
    if (!category || !productsData[category]) return;

    const selectedCategory = productsData[category];
    setProductsTitle(selectedCategory.title);
    setProductsList(selectedCategory.items);
  }, [category]);

  return (
    <div className="container py-10 sm:py-12 lg:py-14">
      <h2 className="mb-8 font-main text-4xl font-extrabold uppercase first-letter:text-primary">
        {produtsTitle}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 ">
        {productsList.map(({ name, image }) => (
          <ProductCard key={name} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
