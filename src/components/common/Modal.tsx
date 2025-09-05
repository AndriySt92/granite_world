import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';

import { Title } from '../';

interface Props {
  children: ReactNode;
  onClose: () => void;
  title: string;
}

const Modal = ({ children, onClose, title }: Props) => {
  const modalRoot = useMemo(() => document.getElementById('modal-root')!, []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Disable scrolling when the modal is open
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(false);
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        className={clsx(
          'mx-4 w-full max-w-md transform space-y-7 rounded-md bg-white p-4 shadow-lg transition-all duration-300 sm:mx-2 sm:p-6',
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-40 opacity-0',
        )}
      >
        <Title variant="dark" size="sm" align="center">
          {title}
        </Title>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
