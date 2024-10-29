import React, { useState } from "react";
import styles from "./ProductView.module.css";
import { VscTools } from "react-icons/vsc";
import ProductItem from "../ProductItem/ProductItem";
import { useGetAllProduct } from "../../hooks/queries";
import useModalContext from "../../hooks/useModalContext";
import ModalContainer from "../modal/modalContainer/modalContainer";
import { useDeleteAllProducts } from "../../hooks/mutation";

function ProductView() {
  const {
    modalType,
    openModal,
    currentPage,
    setCurrentPage,
    filteredSearchedProducts,
    setNotification,
  } = useModalContext();

  //STATE
  const [selectedIds, setSelectedIds] = useState([]);

  // MUTATION
  const { mutate } = useDeleteAllProducts();

  //REACT QUERY - GET DATA
  const { data, isPending, error } = useGetAllProduct(
    currentPage,
    setCurrentPage
  );

  //ISPENDING
  if (isPending) {
    return setNotification("..is panding..");
  }
  //ERROR
  if (error) {
    return setNotification(error.message);
  }

  const deleteAllProductHandler = () => {
    const data = { ids: selectedIds };

    mutate({ data });
  };

  // CHECK IF THE DATA.DATA IS AN ARRAY
  if (!Array.isArray(data.data)) {
    return setNotification("unable to fetch products");
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
        <div>
          <button
            className={styles.containerProductManagement__createProBtn}
            onClick={() => openModal("add")}
          >
            افزودن محصول
          </button>
          <button
            className={styles.containerProductManagement__deleteProBtn}
            onClick={deleteAllProductHandler}
            disabled={selectedIds.length === 0}
          >
            حذف محصولات انتخاب شده
          </button>
        </div>
      </div>
      {/* LIST OF PRODUCTS */}
      <div className={styles.containerProductManagement__list}>
        {!data?.data.length && <p>loading....</p>}
        <table
          className={styles.containerProductManagement__list__containerTable}
        >
          <thead>
            <tr>
              <th></th>
              <th>شماره</th>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {data?.data?.map((product, index) => (
              <ProductItem
                key={product.id}
                product={product}
                index={index}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
              />
            ))} */}
            {(filteredSearchedProducts.length > 0
              ? filteredSearchedProducts
              : data.data
            ).map((product, index) => (
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
