import React from "react";
import useModalContext from "../../../hooks/useModalContext";
import styles from "./ModalContent.module.css";
function AddProductForm() {
  const { closeModal } = useModalContext();

  // ACTION
  const addProductHandler = () => {
    console.log("add");
  };

  return (
    <form className={styles.containerModal} onSubmit={addProductHandler}>
      <h2 className={styles.containerModal__title}>ایجاد محصول جدید</h2>
      <div className={styles.containerModal__inputsGroup}>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">نام کالا</label>
          <input type="text" placeholder="نام کالا" />
        </div>

        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">تعداد موجودی</label>
          <input type="text" placeholder="تعداد  " />
        </div>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">قیمت </label>
          <input type="text" placeholder="قیمت " />
        </div>
      </div>
      <div className={styles.containerModal__ButtonsGroup}>
        <button
          type="submit"
          className={styles.containerModal__ButtonsGroup__acceptBtn}
        >
          ایجاد
        </button>
        <button
          className={styles.containerModal__ButtonsGroup__cancelBtn}
          onClick={closeModal}
        >
          انصراف
        </button>
      </div>
    </form>
  );
}

export default AddProductForm;
