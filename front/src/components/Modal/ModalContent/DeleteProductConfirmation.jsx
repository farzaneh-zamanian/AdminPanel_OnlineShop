import React from "react";
import styles from "./ModalContent.module.css";
import useModalContext from "../../../hooks/useModalContext";
import { useDeleteProduct } from "../../../hooks/mutation";
import { useGetAllProduct } from "../../../hooks/queries";

function DeleteProductConfirmation() {
  const { closeModal, currentProduct } = useModalContext();

  //MUTATION
  const { mutate, isLoading } = useDeleteProduct();
  const { data } = useGetAllProduct();

  //ACTION  - DELETE PRODUCT

  const deleteHandler = () => {
    if (data.totalProducts == 1) return;

    if (!currentProduct) {
      console.error("No current product available for deletion.");
      return;
    }
    mutate(currentProduct);
    closeModal();
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
