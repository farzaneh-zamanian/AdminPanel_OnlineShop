import React, { useState } from "react";
import useModalContext from "../../../hooks/useModalContext";
import styles from "./ModalContent.module.css";
import { useAddProduct } from "../../../hooks/mutation";
import { useNavigate } from "react-router-dom";
import { useQueryClient  } from "@tanstack/react-query";
function AddProductForm() {
  // const navigate = useNavigate();
  //CONTEXT
  const { closeModal } = useModalContext();
  // STATE- FORM
  const [form, setForm] = useState({
    ProductName: "",
    ProductQuantity: "",
    ProductPrice: "",
  });
    // Get the query client instance
    const queryClient = useQueryClient(); 

  //MUTATION
  const { mutate } = useAddProduct();

  // ACTION - SUBMIT FORM
  const submitProductHandler = (event) => {
    event.preventDefault();
    // Data Structure
    const formattedData = {
      name: form.ProductName,
      quantity: form.ProductQuantity,
      price: form.ProductPrice,
    };
    mutate(formattedData, {
      onSuccess: (data) => {
          console.log(data);
        //  closeModal();
// refresh or refetch data associated with a specific query key
        queryClient.invalidateQueries("/products"); // Assuming 'products' is the query key used in useProducts
        closeModal();
      },
      onError: (error) => {
        console.log("ee",error);
      },
    });
  };
  //ACTION-CHANGE ON INPUT
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form className={styles.containerModal} onSubmit={submitProductHandler}>
      <h2 className={styles.containerModal__title}>ایجاد محصول جدید</h2>
      <div className={styles.containerModal__inputsGroup}>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">نام کالا</label>
          <input
            type="text"
            placeholder="نام کالا"
            name="ProductName"
            value={form.ProductName}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">تعداد موجودی</label>
          <input
            type="text"
            placeholder="تعداد  "
            name="ProductQuantity"
            value={form.ProductQuantity}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.containerModal__inputsGroup__input}>
          <label htmlFor="">قیمت </label>
          <input
            type="text"
            placeholder="قیمت "
            name="ProductPrice"
            value={form.ProductPrice}
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
