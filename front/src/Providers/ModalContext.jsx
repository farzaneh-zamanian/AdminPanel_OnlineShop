import React from "react";
import { createContext, useState } from "react";
export const ModalContext = createContext();

function ModalProvider({ children }) {
  //STATE- MODAL
  const [modalType, setModalType] = useState(null);
  const [productId, setProductId] = useState(null); // State to hold product ID

  //ACTION- OPEN MODAL
  const openModal = (type, id = null) => {
    setModalType(type); //Store the modal type
    setProductId(id); // Store the product ID
  };

  //ACTION- CLOSE MODAL
  const closeModal = () => {
    setModalType(null); // Clear the modal type
    setProductId(null); // Clear the product ID
  };
  return (
    <ModalContext.Provider
      value={{ modalType, productId, setModalType, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
