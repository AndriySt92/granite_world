import Slider from 'react-slick';

import { stoneCatalog } from '../../../constants/homeConstants';
import { settings } from '../../../constants/sliderSettings';

import SliderSectionItem from './SliderSectionItem';

const SliderSection = () => {
  return (
    <div className="relative space-y-10">
      <h2 className="font-main text-4xl font-extrabold uppercase first-letter:text-primary">
        Каталог каменю
      </h2>
      <Slider {...settings}>
        {stoneCatalog.map(({ name, image }) => (
          <SliderSectionItem key={name} name={name} image={image} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderSection;
