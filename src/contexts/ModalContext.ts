import { createContext } from 'react';

export type ModalType = 'callback' | 'question' | 'delete' | 'edit' | null;

interface ModalStateContextValue {
  currentModal: ModalType;
}

interface ModalActionsContextValue {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const ModalStateContext = createContext<ModalStateContextValue | undefined>(undefined);
export const ModalActionsContext = createContext<ModalActionsContextValue | undefined>(undefined);
