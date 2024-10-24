import React from "react";
import styles from "./ModalContent.module.css";
import useModalContext from "../../../hooks/useModalContext";

function DeleteProductConfirmation() {
  const { closeModal } = useModalContext();

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
