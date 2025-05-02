import { Link } from 'react-router-dom';

interface CategorySectionItemProps {
  image: string;
  name: string;
  path: string;
}

const CategorySectionItem = ({ image, name, path }: CategorySectionItemProps) => {
  return (
    //Variant 1

    <Link
      key={name}
      to={path}
      className="group relative min-h-[380px] cursor-pointer overflow-hidden rounded-md shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/100 via-dark/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <h3 className="inline-block transform border-b border-b-transparent font-main text-xl font-bold tracking-wide text-white transition-transform duration-500 group-hover:-translate-y-1 ">
          {name}
        </h3>
      </div>
    </Link>

    //Variant 2
    // <Link
    //   to={path}
    //   className="group flex min-h-[380px] cursor-pointer flex-col rounded-md shadow-xl transition-all duration-300 hover:shadow-2xl"
    // >
    //   <div className="flex-1 overflow-hidden rounded-t-md">
    //     <img
    //       src={image}
    //       alt={name}
    //       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    //     />
    //   </div>
    //   <button className="w-full rounded-b-md bg-primary p-2 font-main text-lg text-white transition-all duration-300 group-hover:bg-primary-hover">
    //     {name}
    //   </button>
    // </Link>

    // variant 3
    // <Link
    //   to={path}
    //   className="group relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-secondary/20 bg-light transition-all duration-300 hover:border-primary/30"
    // >
    //   <div className="aspect-square flex-1 overflow-hidden">
    //     <img
    //       src={image}
    //       alt={name}
    //       className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
    //     />
    //   </div>

    //   <div className="bg-dark-200/5 p-4 text-center backdrop-blur-sm">
    //     <h3 className="font-main text-xl font-semibold text-dark-300 transition-colors duration-300 group-hover:text-primary">
    //       {name}
    //     </h3>
    //   </div>
    // </Link>

    // variant 4
    // <Link
    //   to={path}
    //   className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-light shadow-md transition-all duration-300 hover:shadow-xl"
    // >
    //   {/* Image Container */}
    //   <div className="aspect-square flex-1 overflow-hidden">
    //     <img
    //       src={image}
    //       alt={name}
    //       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    //     />
    //   </div>

    //   {/* Content */}
    //   <div className="p-4 text-center">
    //     <h3 className="font-main text-xl font-semibold text-dark-200 transition-colors duration-300 group-hover:text-primary">
    //       {name}
    //     </h3>
    //     <div className="mt-2 h-px w-16 bg-secondary mx-auto opacity-30 transition-all duration-500 group-hover:bg-primary group-hover:opacity-100" />
    //   </div>
    // </Link>

    //variant 5
    // <Link
    //   to={path}
    //   className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-dark-200 shadow-lg transition-transform duration-300 hover:-translate-y-1"
    // >
    //   <div className="relative aspect-square flex-1 overflow-hidden">
    //     <img
    //       src={image}
    //       alt={name}
    //       className="h-full w-full object-cover brightness-95 transition-all duration-500 group-hover:brightness-110"
    //     />
    //     <div className="absolute inset-0 bg-dark-300/20 transition-all duration-500 group-hover:bg-transparent" />
    //   </div>

    //   <div className="p-3 text-center">
    //     <h3 className="font-main text-xl font-medium text-light">
    //       <span className="text-white">{name}</span>
    //     </h3>
    //   </div>
    // </Link>

    // variant 6

    // <Link
    //   to={path}
    //   className="group relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-secondary/20 bg-light transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
    // >
    //   {/* Image Container */}
    //   <div className="relative aspect-square flex-1 overflow-hidden">
    //     <img
    //       src={image}
    //       alt={name}
    //       className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
    //     />

    //     {/* Tiny Gradient Overlay */}
    //     <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-dark-200/40 to-transparent" />

    //     {/* Hover Overlay */}
    //     <div className="absolute inset-0 flex items-center justify-center bg-dark-200/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
    //       <span className="text-lg font-semibold text-light/90">Детальніше →</span>
    //     </div>
    //   </div>

    //   {/* Text Content */}
    //   <div className="bg-light p-4 text-center">
    //     <h3 className="font-main text-xl font-semibold text-dark-300 transition-colors duration-300 group-hover:text-primary">
    //       {name}
    //     </h3>
    //   </div>
    // </Link>
  );
};

export default CategorySectionItem;
