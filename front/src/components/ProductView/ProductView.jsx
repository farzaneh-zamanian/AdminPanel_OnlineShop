import React, { useState } from "react";
import styles from "./ProductView.module.css";
import { VscTools } from "react-icons/vsc";
import ProductItem from "../ProductItem/ProductItem";
import { useGetAllProduct } from "../../hooks/queries";
import useModalContext from "../../hooks/useModalContext";
import ModalContainer from "../modal/modalContainer/modalContainer";
import { useDeleteAllProducts } from "../../hooks/mutation";
import { useQueryClient } from "@tanstack/react-query";

function ProductView() {
  const { modalType, openModal, currentPage, setCurrentPage } =
    useModalContext();

  const queryClient = useQueryClient();
  //STATE
  const [selectedIds, setSelectedIds] = useState([]);

  // MUTATION
  const { mutate } = useDeleteAllProducts();

  //REACT QUERY - GET DATA
  const { data, isPending, error } = useGetAllProduct(
    currentPage,
    setCurrentPage
  );

  //!
  // console.log(data.totalProducts)

  //! must be done
  //ISpENDING
  if (isPending) {
    return <div>Loading...</div>;
  }
  //ERROR
  //! must be done
  if (error) {
    return <div>Error- something went wrong: {error.message}</div>;
  }

  const deleteAllProductHandler = () => {
    const data = { ids: selectedIds };

    //data must be in object{}
    mutate({ data });
  };

  // CHECK IF THE DATA.DATA IS AN ARRAY
  if (!Array.isArray(data.data)) {
    return <div>Error: Unable to fetch products.</div>;
  }

  //UI
  return (
    <section className={styles.containerProductManagement}>
      {/* MANAGEMENT */}
      <div className={styles.containerProductManagement__title}>
        <p>
          <span>
            <VscTools />
          </span>
          <span>مدیریت کالا</span>
        </p>
        <button
          className={styles.containerProductManagement__createProBtn}
          onClick={() => openModal("add")}
        >
          افزودن محصول
        </button>
        <button
          onClick={deleteAllProductHandler}
          disabled={selectedIds.length === 0}
        >
          حذف محصولات انتخاب شده
        </button>
      </div>
      {/* LIST OF PRODUCTS */}
      <div className={styles.containerProductManagement__list}>
        {!data?.data.length && <p>loading....</p>}
        <table
          className={styles.containerProductManagement__list__containerTable}
        >
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>شماره</th>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((product, index) => (
              <ProductItem
                key={product.id}
                product={product}
                index={index}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* RENDER THE MODAL */}
      {modalType && <ModalContainer />}
    </section>
  );
}

export default ProductView;
