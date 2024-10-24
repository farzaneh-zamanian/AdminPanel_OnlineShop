import React, { useState } from "react";
import styles from "./ProductView.module.css";
import { VscTools } from "react-icons/vsc";
import ProductItem from "../ProductItem/ProductItem";
import { useProducts } from "../../hooks/queries";

function ProductView() {
  const result = useProducts();
  console.log(result);
  if (result.isPending) {
    return <div>Loading...</div>;
  }
  // Check if result.data is an array
  if (!Array.isArray(result.data)) {
    return <div>Error: Unable to fetch products.</div>;
  }

  return (
    <section className={styles.containerProductManagement}>
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
      </div>
      <div className={styles.containerProductManagement__list}>
        {!result.data.length && <p>loading....</p>}
        <table
          className={styles.containerProductManagement__list__containerTable}
        >
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {result.data?.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProductView;
