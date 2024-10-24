import React from "react";
import styles from "./Pagination.module.css";

function Pagination() {
  return (
    <section className={styles.containerPagination}>
      <div className={styles.containerPagination__pagination}>
        <button className={styles.containerPagination__pagination__button}>
          1
        </button>
        <button className={styles.containerPagination__pagination__button}>
          2
        </button>
        <button className={styles.containerPagination__pagination__button}>
          3
        </button>
      </div>
    </section>
  );
}

export default Pagination;
