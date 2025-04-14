import { ContactInfo, DesktopNav, Logo, MobileNav } from './components';

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

const NAVIGATION: NavItem[] = [
  { label: 'Головна', href: '/' },
  {
    label: "Пам'ятники",
    href: '#',
    subItems: [
      { label: "Одинарні пам'ятники", href: '/products/1' },
      { label: "Двійні пам'ятники", href: '/products/2' },
      { label: "Трійні пам'ятники", href: '/products/3' },
      { label: "Пам'ятники для військових", href: '/products/4' },
      { label: "Дитячі пам'ятники", href: '/products/5' },
    ],
  },
  {
    label: "Деталі до пам'ятників",
    href: '/about',
    subItems: [
      { label: 'Вази', href: '/products/1' },
      { label: 'Ломпади', href: '/products/2' },
      { label: 'Кулі', href: '/products/3' },
      { label: 'Кути точені гранітні', href: '/products/4' },
      { label: 'Кути полімерні', href: '/products/5' },
      { label: 'Крижки', href: '/products/6' },
    ],
  },
  {
    label: 'Будівельні матеріали',
    href: '#',
    subItems: [
      { label: 'Підвіконня', href: '/services/1' },
      { label: 'Стільниці', href: '/services/2' },
      { label: 'Сходи', href: '/services/3' },
      { label: 'Бруківка', href: '/services/3' },
      { label: 'Балюстради', href: '/services/3' },
    ],
  },
  { label: 'Каталог каменю', href: '/about' },
  { label: 'Контакти', href: '/contact' },
];

export const Header = () => (
  <header className="sticky top-0 z-50 border-b shadow-sm">
    <div className="bg-dark">
      <div className="container flex flex-col justify-between gap-6 py-6 lg:mx-auto lg:flex-row">
        <Logo />
        <ContactInfo />
      </div>
    </div>

    <div className="shadow-top-sm bg-dark-300">
      <div className="container">
        <DesktopNav items={NAVIGATION} />
        <MobileNav items={NAVIGATION} />
      </div>
    </div>
  </header>
);

export default Header;

// components/Header.tsx
// import { useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
// import { CgMail } from 'react-icons/cg';
// import { FiPhone } from 'react-icons/fi';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import clsx from 'clsx';
// import Logo from './components/Logo';
// import ContactInfo from './components/ContactInfo';
// import { DesktopNav } from './components/DesktopNav';

// interface NavItem {
//   label: string;
//   href: string;
//   subItems?: NavItem[];
// }

// const NAVIGATION: NavItem[] = [
//   { label: 'Головна', href: '/' },
//   {
//     label: "Пам'ятники",
//     href: '#',
//     subItems: [
//       { label: "Одинарні пам'ятники", href: '/products/1' },
//       { label: "Двійні пам'ятники", href: '/products/2' },
//       { label: "Трійні пам'ятники", href: '/products/3' },
//       { label: "Пам'ятники для військових", href: '/products/4' },
//       { label: "Дитячі пам'ятники", href: '/products/5' },
//     ],
//   },
//   {
//     label: "Деталі до пам'ятників",
//     href: '/about',
//     subItems: [
//       { label: 'Вази', href: '/products/1' },
//       { label: 'Ломпади', href: '/products/2' },
//       { label: 'Кулі', href: '/products/3' },
//       { label: 'Кути точені гранітні', href: '/products/4' },
//       { label: 'Кути полімерні', href: '/products/5' },
//       { label: 'Крижки', href: '/products/6' },
//     ],
//   },
//   {
//     label: 'Будівельні матеріали',
//     href: '#',
//     subItems: [
//       { label: 'Підвіконня', href: '/services/1' },
//       { label: 'Стільниці', href: '/services/2' },
//       { label: 'Сходи', href: '/services/3' },
//       { label: 'Бруківка', href: '/services/3' },
//       { label: 'Балюстради', href: '/services/3' },
//     ],
//   },
//   { label: 'Каталог каменю', href: '/about' },
//   { label: 'Контакти', href: '/contact' },
// ];

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null);

//   const toggleSubmenu = (label: string) => {
//     setMobileActiveSubmenu(mobileActiveSubmenu === label ? null : label);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b shadow-sm">
//       <div className="bg-dark">
//         <div className="container flex flex-col justify-between gap-6 py-6 lg:mx-auto lg:flex-row">
//           <Logo />
//           <ContactInfo />
//         </div>
//       </div>
//       <div className="shadow-top-sm bg-dark-300">
//         <div className="container">
//           {/* Main Header */}
//           <div className="flex items-center justify-between">
//             {/* Desktop Navigation */}
//             <DesktopNav items={NAVIGATION} />
//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="relative rounded-md py-3 text-secondary transition-colors lg:hidden"
//               aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//             >
//               <div className="relative h-6 w-6">
//                 <RxHamburgerMenu
//                   className={clsx('absolute h-full w-full transform transition-all duration-300', {
//                     'rotate-90 opacity-0': isMobileMenuOpen,
//                     'rotate-0 opacity-100': !isMobileMenuOpen,
//                   })}
//                 />
//                 <AiOutlineClose
//                   className={clsx('absolute h-full w-full transform transition-all duration-300', {
//                     'scale-100 rotate-0 opacity-100': isMobileMenuOpen,
//                     'scale-0 -rotate-90 opacity-0': !isMobileMenuOpen,
//                   })}
//                 />
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu - Opens below header */}
//           <div
//             className={clsx(
//               'overflow-hidden bg-dark-300 transition-all duration-300 ease-in-out lg:hidden',
//               {
//                 'max-h-[1000px] py-2 opacity-100': isMobileMenuOpen,
//                 'max-h-0 opacity-0': !isMobileMenuOpen,
//               },
//             )}
//           >
//             <nav className="space-y-2 px-4 ">
//               {NAVIGATION.map((item) => (
//                 <div key={item.label} className="py-1">
//                   <div className="flex items-center justify-between">
//                     <a
//                       href={item.href}
//                       className="block w-full py-2 text-secondary"
//                       onClick={(e) => {
//                         if (item.subItems) {
//                           e.preventDefault();
//                           toggleSubmenu(item.label);
//                         }
//                       }}
//                     >
//                       {item.label}
//                     </a>
//                     {item.subItems && (
//                       <button
//                         onClick={() => toggleSubmenu(item.label)}
//                         className="py-2 text-xl text-secondary transition-colors"
//                         aria-expanded={mobileActiveSubmenu === item.label}
//                       >
//                         <MdKeyboardArrowDown
//                           className={clsx('h-6 w-6 transform transition-transform', {
//                             'rotate-180': mobileActiveSubmenu === item.label,
//                           })}
//                         />
//                       </button>
//                     )}
//                   </div>

//                   {/* Mobile Submenu with smooth animation */}
//                   {item.subItems && (
//                     <div
//                       className={clsx(
//                         'overflow-hidden pl-4 transition-all duration-300 ease-in-out',
//                         {
//                           'max-h-[500px] opacity-100': mobileActiveSubmenu === item.label,
//                           'max-h-0 opacity-0': mobileActiveSubmenu !== item.label,
//                         },
//                       )}
//                     >
//                       {item.subItems.map((subItem) => (
//                         <a
//                           key={subItem.label}
//                           href={subItem.href}
//                           className="block py-2 pl-4 text-secondary transition-colors hover:text-primary"
//                         >
//                           {subItem.label}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null);

//   const toggleSubmenu = (label: string) => {
//     setMobileActiveSubmenu(mobileActiveSubmenu === label ? null : label);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b shadow-sm">
//       <div className="bg-dark">
//         <div className="container flex flex-col justify-between gap-6 py-6 lg:mx-auto lg:flex-row">
//           <div className="text-bold font-main text-3xl font-bold text-primary">Cвіт Граніту</div>
//           <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:gap-6">
//             <div className="flex justify-start">
//               <a
//                 className="flex flex-col"
//                 href="mailto:graniteworld@gmail.com"
//                 rel="nofollow"
//                 target="_blank"
//               >
//                 <div className="flex flex-col">
//                   <div className="font-main text-xl font-bold uppercase text-light">
//                     graniteworld@gmail.com
//                   </div>
//                   <div className="flex items-center justify-start gap-1 font-main text-secondary transition-colors duration-500 hover:text-primary lg:justify-center">
//                     <CgMail className="h-5 w-5" />
//                     <span>Напишіть нам на E-Mail</span>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="flex justify-start">
//               <a
//                 className="flex flex-col"
//                 href="tel:+38 096 112 112 6"
//                 rel="nofollow"
//                 target="_blank"
//               >
//                 <div className="flex flex-col">
//                   <div className="font-main text-xl font-bold uppercase text-light">
//                     +38 067 112 112 6
//                   </div>
//                   <div className="font-main text-xl font-bold uppercase text-light">
//                     +38 096 112 112 6
//                   </div>
//                   <div className="flex items-center justify-start gap-1 align-baseline font-main text-secondary transition-colors duration-500 hover:text-primary lg:justify-center">
//                     <FiPhone className="h-4 w-4" />
//                     <span>Зателефонуйте нам</span>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="shadow-top-sm bg-dark-300">
//         <div className="container mx-auto">
//           {/* Main Header */}
//           <div className="flex items-center justify-between">
//             {/* Desktop Navigation */}
//             <nav className="hidden h-full space-x-1 lg:flex">
//               {NAVIGATION.map((item) => (
//                 <div
//                   key={item.label}
//                   className="group relative mr-[1px] cursor-pointer bg-dark-100 px-5 py-4 font-main text-sm uppercase text-secondary transition-colors duration-300 hover:bg-dark-hover hover:text-primary xl:text-base"
//                 >
//                   <a href={item.href} className="align-center flex">
//                     {item.label}
//                     {item.subItems && (
//                       <MdKeyboardArrowDown className="ml-1 h-5 w-5 self-center duration-300 hover:text-primary group-hover:rotate-180 xl:h-6 xl:w-6" />
//                     )}
//                   </a>

//                   {item.subItems && (
//                     <div className="pointer-events-none absolute left-0 top-full min-w-[200px] origin-top scale-y-95 bg-dark-100 py-0 opacity-0 shadow-lg transition-all duration-300 group-hover:pointer-events-auto group-hover:scale-y-100 group-hover:opacity-100">
//                       {item.subItems.map((subItem) => (
//                         <a
//                           key={subItem.label}
//                           href={subItem.href}
//                           className="block bg-dark-100 px-4 py-3 text-base capitalize text-secondary transition-colors duration-300 hover:bg-dark-hover hover:text-primary"
//                         >
//                           {subItem.label}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="relative rounded-md py-3 text-secondary transition-colors lg:hidden"
//               aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//             >
//               <div className="relative h-6 w-6">
//                 <RxHamburgerMenu
//                   className={clsx('absolute h-full w-full transform transition-all duration-300', {
//                     'rotate-90 opacity-0': isMobileMenuOpen,
//                     'rotate-0 opacity-100': !isMobileMenuOpen,
//                   })}
//                 />
//                 <AiOutlineClose
//                   className={clsx('absolute h-full w-full transform transition-all duration-300', {
//                     'scale-100 rotate-0 opacity-100': isMobileMenuOpen,
//                     'scale-0 -rotate-90 opacity-0': !isMobileMenuOpen,
//                   })}
//                 />
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu - Opens below header */}
//           <div
//             className={clsx(
//               'overflow-hidden bg-dark-300 transition-all duration-300 ease-in-out lg:hidden',
//               {
//                 'max-h-[1000px] py-2 opacity-100': isMobileMenuOpen,
//                 'max-h-0 opacity-0': !isMobileMenuOpen,
//               },
//             )}
//           >
//             <nav className="space-y-2 px-4 ">
//               {NAVIGATION.map((item) => (
//                 <div key={item.label} className="py-1">
//                   <div className="flex items-center justify-between">
//                     <a
//                       href={item.href}
//                       className="block w-full py-2 text-secondary"
//                       onClick={(e) => {
//                         if (item.subItems) {
//                           e.preventDefault();
//                           toggleSubmenu(item.label);
//                         }
//                       }}
//                     >
//                       {item.label}
//                     </a>
//                     {item.subItems && (
//                       <button
//                         onClick={() => toggleSubmenu(item.label)}
//                         className="py-2 text-xl text-secondary transition-colors"
//                         aria-expanded={mobileActiveSubmenu === item.label}
//                       >
//                         <MdKeyboardArrowDown
//                           className={clsx('h-6 w-6 transform transition-transform', {
//                             'rotate-180': mobileActiveSubmenu === item.label,
//                           })}
//                         />
//                       </button>
//                     )}
//                   </div>

//                   {/* Mobile Submenu with smooth animation */}
//                   {item.subItems && (
//                     <div
//                       className={clsx(
//                         'overflow-hidden pl-4 transition-all duration-300 ease-in-out',
//                         {
//                           'max-h-[500px] opacity-100': mobileActiveSubmenu === item.label,
//                           'max-h-0 opacity-0': mobileActiveSubmenu !== item.label,
//                         },
//                       )}
//                     >
//                       {item.subItems.map((subItem) => (
//                         <a
//                           key={subItem.label}
//                           href={subItem.href}
//                           className="block py-2 pl-4 text-secondary transition-colors hover:text-primary"
//                         >
//                           {subItem.label}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
