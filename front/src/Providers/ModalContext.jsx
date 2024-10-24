import React from "react";
import { createContext, useState } from "react";
export const ModalContext = createContext();

function ModalProvider({ children }) {
  //STATE- MODAL
  const [modalType, setModalType] = useState(null);
  //ACTION- OPEN MODAL
  const openModal = (type) => {
    setModalType(type);
  };
  //ACTION- CLOSE MODAL

  const closeModal = () => {
    setModalType(null);
  };
  return (
    <ModalContext.Provider
      value={{ modalType, setModalType, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
