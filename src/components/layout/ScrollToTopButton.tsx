import { FaArrowUp } from 'react-icons/fa';

import { useScrollToTopVisibility } from '../../hooks';

const ScrollToTopButton = () => {
  const showScrollTop = useScrollToTopVisibility();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-full bg-primary p-3 text-white transition-all duration-300 hover:scale-110 sm:p-2 ${
        showScrollTop ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-2xl sm:text-4xl" />
    </button>
  );
};

export default ScrollToTopButton;
