import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryCard, GridContainer, PageContainer, Title } from '../../components/common';
import { categories } from '../../constants';

const Catalog = () => {
  const { category } = useParams<{ category: keyof typeof categories }>();
  const [categoryList, setCategoryList] = useState<
    { title: string; path: string; image: string }[]
  >([]);
  const [categoryTitle, setCategoryTitle] = useState<string>('');

  useEffect(() => {
    if (!category || !categories[category]) return;

    const selectedCategory = categories[category];
    setCategoryTitle(selectedCategory.title);
    setCategoryList(selectedCategory.items);
  }, [category]);

  return (
    <PageContainer>
      <Title as="h1" size="lg">
        {categoryTitle}
      </Title>

      {/* Categories */}
      <GridContainer>
        {categoryList.map(({ title, image, path }) => (
          <CategoryCard key={title} title={title} image={image} path={path} />
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default Catalog;
