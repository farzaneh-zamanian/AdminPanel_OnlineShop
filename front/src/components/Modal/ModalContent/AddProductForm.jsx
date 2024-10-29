import React, { useState } from "react";
import useModalContext from "../../../hooks/useModalContext";
import styles from "./ModalContent.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateProduct } from "../../../hooks/mutation";

function AddProductForm() {
  //CONTEXT
  const { closeModal } = useModalContext();
  // STATE- FORM
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });
  // Get the query client instance
  const queryClient = useQueryClient();

  //MUTATION
  const { mutate } = useCreateProduct();

  // ACTION - SUBMIT FORM
  const submitAddProductHandler = (event) => {
    event.preventDefault();

    const { name, price } = form;
    //! VALIDATION MUST BE DONE
    //VALIDATION
    if (!name || !price) return;

    mutate(form);
    closeModal();

    // , {
    //   onSuccess: (data) => {
    //     // queryClient.invalidateQueries("all-products"); move invalidation to mutation.js
    //     closeModal();
    //   },
    //   onError: (error) => {
    //     //! must be done
    //     console.log("ee", error);
    //   },
    // }
  };
  
  //ACTION-CHANGE ON INPUT
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((form) => ({ ...form, [name]: value }));
  };

  //UI
  return (
    <form className={styles.containerModal} onSubmit={submitAddProductHandler}>
      <h2 className={styles.containerModal__title}>ایجاد محصول جدید</h2>
      <div className={styles.containerModal__inputsGroup}>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">نام کالا</label>
          <input
            type="text"
            placeholder="نام کالا"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">تعداد موجودی</label>
          <input
            type="number"
            placeholder="تعداد  "
            name="quantity"
            value={form.quantity}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">قیمت </label>
          <input
            type="number"
            placeholder="قیمت "
            name="price"
            value={form.price}
            onChange={changeHandler}
          />
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
