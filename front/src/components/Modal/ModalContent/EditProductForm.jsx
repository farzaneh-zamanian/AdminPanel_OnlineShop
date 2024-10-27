import React, { useState } from "react";
import useModalContext from "../../../hooks/useModalContext";
import styles from "./ModalContent.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateProduct } from "../../../hooks/mutation";

function EditProductForm() {
  const { closeModal, currentProduct } = useModalContext(); //CONTEXT
  const queryClient = useQueryClient();
  //MUTATION
  const { mutate } = useUpdateProduct();

  //SATE - EDITED PRODUCT
  const [editedProduct, setEditedProduct] = useState(currentProduct);

  // ACTION - SUBMIT FORM
  const editProductHandler = (event) => {
    event.preventDefault();

    //validation
    if (
      !editedProduct.name ||
      !editedProduct.quantity ||
      !editedProduct.price
    ) {
      alert("Please fill in fields.");
      return;
    }


    mutate((editedProduct), {
      onSuccess: () => {
        queryClient.invalidateQueries("/products");
        closeModal();
      },
      onError: (error) => {
        console.error("Error updating product:", error);
      },
    });
  };

  // ACTION - onCHANGE
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEditedProduct((editedProduct) => ({
      ...editedProduct,
      [name]: value, // Use name attribute to update the corresponding field
    }));
  };

  return (
    <form className={styles.containerModal} onSubmit={editProductHandler}>
      <h2 className={styles.containerModal__title}>ویرایش اطلاعات </h2>
      <div className={styles.containerModal__inputsGroup}>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">نام کالا</label>
          <input
            type="text"
            placeholder="نام کالا"
            value={editedProduct.name}
            onChange={changeHandler}
            name="name"
          />
        </div>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">تعداد موجودی</label>
          <input
            type="text"
            placeholder="تعداد  "
            value={editedProduct.quantity}
            onChange={changeHandler}
            name="quantity"
          />
        </div>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">قیمت </label>
          <input
            type="text"
            placeholder="قیمت "
            value={editedProduct.price}
            onChange={changeHandler}
            name="price"
          />
        </div>
      </div>
      <div className={styles.containerModal__ButtonsGroup}>
        <button
          type="submit"
          className={styles.containerModal__ButtonsGroup__acceptBtn}
        >
          ثبت اطلاعات جدید
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

export default EditProductForm;
