import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Props {
  onClick?: () => void;
}

export const NextArrow = ({ onClick }: Props) => {
  return (
    <FaArrowRight
      className="absolute !-top-[55px] !right-2 cursor-pointer text-xl text-dark transition-colors duration-300 hover:text-primary sm:!-top-[72px] sm:text-2xl"
      onClick={onClick}
    />
  );
};

export const PrevArrow = ({ onClick }: Props) => {
  return (
    <FaArrowLeft
      className="absolute !-top-[55px] !right-10 cursor-pointer text-xl text-dark transition-colors duration-300 hover:text-primary sm:!-top-[72px] sm:!right-14 sm:text-2xl"
      onClick={onClick}
    />
  );
};
