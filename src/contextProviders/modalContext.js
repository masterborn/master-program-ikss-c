import { createContext, useState } from 'react';

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  const onOpenModal = () => {
    setIsModalOpen(true);
  };
  const value = { isModalOpen, onCloseModal, onOpenModal };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export default ModalProvider;
