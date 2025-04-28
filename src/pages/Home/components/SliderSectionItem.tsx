interface CategorySectionItemProps {
  image: string;
  name: string;
}

const SliderSectionItem = ({ image, name }: CategorySectionItemProps) => {
  return (
    <div className="group cursor-pointer transition-all duration-300">
      <div className="overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="w-full rounded-b-md bg-white p-2 text-center font-main text-lg uppercase text-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default SliderSectionItem;
