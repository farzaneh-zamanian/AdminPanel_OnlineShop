import React from "react";
import { createContext, useState } from "react";
export const ModalContext = createContext();

function ModalProvider({ children }) {
  //STATE- MODAL
  const [modalType, setModalType] = useState(null);
  const [productId, setProductId] = useState(null); // State to hold product ID
  const [currentProduct, setCurrentProduct] = useState(null);

  //ACTION- OPEN MODAL
  const openModal = (type, product = null) => {
    setModalType(type); //Store the modal type
    // setProductId(id); // Store the product ID
    setCurrentProduct(product); // Store the current product
  };

  //ACTION- CLOSE MODAL
  const closeModal = () => {
    setModalType(null); // Clear the modal type
    // setProductId(null); // Clear the product ID
    setCurrentProduct(null); // Clear the current product
  };
  return (
    <ModalContext.Provider
      value={{ modalType, currentProduct , setModalType, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
