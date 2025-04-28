import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Props {
  onClick?: () => void;
}

export const NextArrow = ({ onClick }: Props) => {
  return (
    <FaArrowRight
      size={25}
      className="absolute !-top-[72px] !right-2 cursor-pointer text-dark transition-colors duration-300 hover:text-primary"
      onClick={onClick}
    />
  );
};

export const PrevArrow = ({ onClick }: Props) => {
  return (
    <FaArrowLeft
      size={25}
      className="absolute !-top-[72px] !right-14 cursor-pointer text-dark transition-colors duration-300 hover:text-primary"
      onClick={onClick}
    />
  );
};
