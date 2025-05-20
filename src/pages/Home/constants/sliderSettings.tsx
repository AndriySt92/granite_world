import { NextArrow, PrevArrow } from '../components/SliderArrows';

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  appendDots: (dots: React.ReactNode) => (
    <div className="">
      <ul className="!flex !items-baseline !justify-center">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div
      className="!h-2 !w-2 !rounded-full !bg-gray-300 transition-all duration-300 
                        hover:!bg-primary sm:!h-3
                        sm:!w-3
                        [.slick-active_&]:scale-125
                        [.slick-active_&]:!bg-primary"
    />
  ),
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default settings;
