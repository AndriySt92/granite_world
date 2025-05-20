import Slider from 'react-slick';

import { Title } from '../../../components/common';
import { settings } from '../constants';

import { SliderCard } from '.';

type ItemType = { name: string; image: string } | string;

interface SliderSectionProps {
  title: string;
  items: ItemType[];
}

const SliderSection = ({ title, items }: SliderSectionProps) => {
  return (
    <div className="spacing-sm relative">
      <Title>{title}</Title>
      <Slider {...settings}>
        {items.map((item, index) => {
          if (typeof item === 'string') {
            return <SliderCard key={`${item}-${index}`} image={item} />;
          }
          return <SliderCard key={item.name} title={item.name} image={item.image} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderSection;
