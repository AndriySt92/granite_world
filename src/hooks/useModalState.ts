import { useContext } from 'react';

import { ModalStateContext } from '../contexts/ModalContext';

const useModalState = () => {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
};

export default useModalState;
