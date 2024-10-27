import React from "react";
import styles from "./ModalContent.module.css";
import useModalContext from "../../../hooks/useModalContext";
import { useDeleteProduct } from "../../../hooks/mutation";
import { useQueryClient } from "@tanstack/react-query";





function DeleteProductConfirmation() {
  const { closeModal, currentProduct } = useModalContext();
  // Get the query client instance
  const queryClient = useQueryClient();
  //MUTATION
  const { mutate, isLoading } = useDeleteProduct();

  //ACTION  - DELETE PRODUCT
  const deleteHandler = () => {
    if (!currentProduct) {
      console.error("No current product available for deletion.");
      return;
    }

    mutate(currentProduct, {
      onSuccess: () => {
        queryClient.invalidateQueries("/products"); // Assuming 'products' is the query key used in useProducts
        closeModal();
      },
      onError: (error) => {
        console.log("ee", error);
        setErrorMessage("حذف محصول با خطا مواجه شد."); // Example error message
        console.error("Error details:", error);
        console.log("Response data:", error.response.data); // Log response data for more context
      },
    });
  };
  return (
    <div className={styles.containerDeleteConfirmation}>
      <img
        className={styles.containerDeleteConfirmation__image}
        src="./src/assets/images/Close.svg"
        alt="close logo"
      />
      <p className={styles.containerDeleteConfirmation__content}>
        آیا از حذف این محصول اطمینان دارید ؟
      </p>
      <div className={styles.containerDeleteConfirmation__btnGroup}>
        <button
          className={styles.containerDeleteConfirmation__btnGroup__btnAccept}
          onClick={deleteHandler}
          disabled={isLoading}
        >
          حذف
        </button>
        <button
          className={styles.containerDeleteConfirmation__btnGroup__btnCancel}
          onClick={closeModal}
        >
          لغو
        </button>
      </div>
    </div>
  );
}

export default DeleteProductConfirmation;
