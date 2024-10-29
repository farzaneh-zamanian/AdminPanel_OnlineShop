import React from "react";
import { useGetAllProduct } from "../../hooks/queries";
import Card from "../../components/Card/Card";
import styles from "./ProductsPage.module.css"


function ProductsPage() {
  const { data, isPending } = useGetAllProduct();
  if (isPending) {
    return <div>Loading...</div>;
  }
  // Check if result.data is an array
  if (!Array.isArray(data.data)) {
    return <div>Error: Unable to fetch products.</div>;
  }
  return (
    <main className={styles.container}>
      {/* PRODUCTS LIST SECTION*/}
      <section className={styles.productsContainer}>
        {!data?.data.length && <p>loading....</p>}
        {data?.data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default ProductsPage;
