import { Title } from '../../../components/common';

interface CategorySectionItemProps {
  image: string;
  title?: string;
}

const SliderCard = ({ image, title }: CategorySectionItemProps) => {
  return (
    <div className="group cursor-pointer transition-all duration-300">
      <div className="relative min-h-[300px] w-full overflow-hidden rounded-t-md bg-gray-100">
        <img
          src={image}
          alt={title || 'Slider Item'}
          className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {title && (
        <div className="rounded-b-md bg-white p-2 transition-all duration-300 group-hover:bg-primary ">
          <Title
            as="h4"
            size="xs"
            variant="dark"
            weight="medium"
            className="transition-colors duration-300 group-hover:text-white"
          >
            {title}
          </Title>
        </div>
      )}
    </div>
  );
};

export default SliderCard;
