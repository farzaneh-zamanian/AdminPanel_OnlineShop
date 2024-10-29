import React, { useEffect } from "react";
import { createContext, useState } from "react";
export const ModalContext = createContext();

function ModalProvider({ children }) {
  //STATE- MODAL
  const [modalType, setModalType] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredSearchedProducts, setFilteredSearchedProducts] = useState([]);
  const [notification, setNotification] = useState("");

  // CLEAR NOTIFICATION
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

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
        setCurrentPage,
        filteredSearchedProducts,
        setFilteredSearchedProducts,
        notification,
        setNotification,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
