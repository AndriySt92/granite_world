import Slider from 'react-slick';

import { settings } from '../../../constants/sliderSettings';

import { SliderCard } from '.';

type ItemType = { name: string; image: string } | string;

interface SliderSectionProps {
  title: string;
  items: ItemType[];
}

const SliderSection = ({ title, items }: SliderSectionProps) => {
  return (
    <div className="relative space-y-6 sm:space-y-8 lg:space-y-10">
      <h2 className="font-main text-3xl font-extrabold uppercase first-letter:text-primary sm:text-4xl">
        {title}
      </h2>
      <Slider {...settings}>
        {items.map((item, index) => {
          if (typeof item === 'string') {
            return <SliderCard key={`${item}-${index}`} image={item} />;
          }
          return <SliderCard key={item.name} name={item.name} image={item.image} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderSection;
