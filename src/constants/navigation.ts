import type { NavItem } from '../types/navigation';

const navigation: NavItem[] = [
  { label: 'Головна', path: '/' },
  {
    label: "Пам'ятники",
    path: '/categories/monuments',
    subItems: [
      { label: "Одинарні пам'ятники", path: '/products/single-monuments' },
      { label: "Двійні пам'ятники", path: '/products/double-monuments' },
      { label: "Трійні пам'ятники", path: '/products/triple-monuments' },
      { label: "Пам'ятники для військових", path: '/products/military-monuments' },
      { label: "Дитячі пам'ятники", path: '/products/children-monuments' },
    ],
  },
  {
    label: "Деталі до пам'ятників",
    path: '/categories/monument-accessories',
    subItems: [
      { label: 'Вази', path: '/products/vases' },
      { label: 'Ломпади', path: '/products/lamps' },
      { label: 'Кулі', path: '/products/balls' },
      { label: 'Кути точені гранітні', path: '/products/granite-turned-corners' },
      { label: 'Кути полімерні', path: '/products/polymer-corners' },
      { label: 'Крижки', path: '/products/covers' },
    ],
  },
  {
    label: 'Будівельні матеріали',
    path: '/categories/construction-materials',
    subItems: [
      { label: 'Підвіконня', path: '/products/windowsills' },
      { label: 'Стільниці', path: '/products/countertops' },
      { label: 'Сходи', path: '/products/stairs' },
      { label: 'Бруківка', path: '/products/paving' },
      { label: 'Балюстради', path: '/products/balustrades' },
    ],
  },
  { label: 'Каталог каменю', path: '/stone-catalog' },
  { label: 'Наші роботи', path: '/our-works' },
  { label: 'Контакти', path: '/contacts' },
];

export default navigation;
