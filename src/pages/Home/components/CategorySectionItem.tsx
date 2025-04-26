interface CategorySectionItemProps {
  image: string;
  name: string;
}

const CategorySectionItem = ({ image, name }: CategorySectionItemProps) => {
  return (
    //Variant 1

    // <div
    //   key={name}
    //   className="group relative cursor-pointer overflow-hidden rounded-md shadow-xl transition-all duration-300 hover:shadow-2xl"
    // >
    //   <img
    //     src={image}
    //     alt={name}
    //     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    //   />

    //   {/* Gradient Overlay */}
    //   <div className="absolute inset-0 bg-gradient-to-t from-dark/100 via-dark/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

    //   <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
    //     <h3 className="inline-block transform border-b border-b-transparent font-main text-xl font-bold tracking-wide text-white transition-transform duration-500 group-hover:-translate-y-1 ">
    //       {name}
    //     </h3>
    //   </div>
    // </div>

    //Variant 2
    <div
      key={name}
      className="group cursor-pointer rounded-md shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      <div className="overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <button className="w-full rounded-b-md bg-primary p-2 font-main text-lg text-white transition-all duration-300 group-hover:bg-primary-hover">
        {name}
      </button>
    </div>
  );
};

export default CategorySectionItem;
