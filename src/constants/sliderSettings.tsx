import { NextArrow, PrevArrow } from '../pages/Home/components/SliderArrows';

export const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  appendDots: (dots: React.ReactNode) => (
    <div className="!mt-10">
      <ul className="!mt-3 !flex !items-baseline !justify-center !pt-3">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div
      className="!h-3 !w-3 !rounded-full !bg-gray-300 
                        transition-all duration-300
                        hover:!bg-primary
                        [.slick-active_&]:scale-125
                        [.slick-active_&]:!bg-primary"
    />
  ),
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1279,
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
