import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import type { ModalType } from './ModalContext';
import { ModalActionsContext, ModalStateContext } from './ModalContext';

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [currentModal, setCurrentModal] = useState<ModalType>(null);

  const openModal = useCallback((type: ModalType) => {
    setCurrentModal(type);
  }, []);

  const closeModal = useCallback(() => {
    setCurrentModal(null);
  }, []);

  const stateContextValue = useMemo(
    () => ({
      currentModal,
    }),
    [currentModal],
  );

  const actionsContextValue = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [openModal, closeModal],
  );

  return (
    <ModalStateContext.Provider value={stateContextValue}>
      <ModalActionsContext.Provider value={actionsContextValue}>
        {children}
      </ModalActionsContext.Provider>
    </ModalStateContext.Provider>
  );
};
