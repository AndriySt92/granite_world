interface CategorySectionItemProps {
  image: string;
  name?: string;
}

const SliderCard = ({ image, name }: CategorySectionItemProps) => {
  return (
    <div className="group cursor-pointer transition-all duration-300">
      <div className="relative min-h-[300px] w-full overflow-hidden rounded-t-md bg-gray-100">
        <img
          src={image}
          alt={name || 'Slider Item'}
          className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {name && (
        <div className="w-full rounded-b-md bg-white p-2 text-center font-main text-lg uppercase text-dark transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          {name}
        </div>
      )}
    </div>
  );
};

export default SliderCard;
