import React from "react";
import { createContext, useState } from "react";
export const ModalContext = createContext();

function ModalProvider({ children }) {
  //STATE- MODAL
  const [modalType, setModalType] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  //ACTION- OPEN MODAL
  const openModal = (type, product = null) => {
    setModalType(type);
    setCurrentProduct(product);
  };

  //ACTION- CLOSE MODAL
  const closeModal = () => {
    setModalType(null); // Clear the modal type
    setCurrentProduct(null); // Clear the current product
  };
  return (
    <ModalContext.Provider
      value={{
        modalType,
        currentProduct,
        setModalType,
        openModal,
        closeModal,
        currentPage,
         setCurrentPage
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
