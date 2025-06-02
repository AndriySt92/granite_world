import { useContext } from 'react';

import { ModalActionsContext } from '../contexts/ModalContext';

const useModalActions = () => {
  const context = useContext(ModalActionsContext);
  if (context === undefined) {
    throw new Error('useModalActions must be used within a ModalProvider');
  }
  return context;
};

export default useModalActions;
