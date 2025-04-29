import type { NavItem } from '../types/navigation';

const navigation: NavItem[] = [
  { label: 'Головна', path: '/' },
  {
    label: "Пам'ятники",
    path: '/monuments',
    subItems: [
      { label: "Одинарні пам'ятники", path: '/single-monuments' },
      { label: "Двійні пам'ятники", path: '/double-monuments' },
      { label: "Трійні пам'ятники", path: '/triple-monuments' },
      { label: "Пам'ятники для військових", path: '/military-monuments' },
      { label: "Дитячі пам'ятники", path: '/children-monuments' },
    ],
  },
  {
    label: "Деталі до пам'ятників",
    path: '/monument-accessories',
    subItems: [
      { label: 'Вази', path: '/vases' },
      { label: 'Ломпади', path: '/lamps' },
      { label: 'Кулі', path: '/balls' },
      { label: 'Кути точені гранітні', path: '/granite-turned-corners' },
      { label: 'Кути полімерні', path: '/polymer-corners' },
      { label: 'Крижки', path: '/covers' },
    ],
  },
  {
    label: 'Будівельні матеріали',
    path: '/construction-materials',
    subItems: [
      { label: 'Підвіконня', path: '/windowsills' },
      { label: 'Стільниці', path: '/countertops' },
      { label: 'Сходи', path: '/stairs' },
      { label: 'Бруківка', path: '/paving' },
      { label: 'Балюстради', path: '/balustrades' },
    ],
  },
  { label: 'Каталог каменю', path: '/stone-catalog' },
  { label: 'Наші роботи', path: '/our-works' },
  { label: 'Контакти', path: '/contact' },
];

export default navigation;
