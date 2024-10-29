import React from "react";
import styles from "./Pagination.module.css";
import { useGetAllProduct } from "../../hooks/queries";
import useModalContext from "../../hooks/useModalContext";

function Pagination() {
  const { currentPage, setCurrentPage } = useModalContext();
  const itemsPerPage = 10;

  const { data, isLoading, isError } = useGetAllProduct(
    currentPage,
    itemsPerPage
  );

  const totalPages = data ? Math.ceil(data.totalProducts / itemsPerPage) : 0;

  const paginationHandler = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <section className={styles.containerPagination}>
      <div className={styles.containerPagination__pagination}>
        <button
          onClick={() => paginationHandler(currentPage - 1)}
          disabled={currentPage === 1}
        >
          قبلی
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${currentPage === index + 1 ? styles.active : ""}`}
            onClick={() => paginationHandler(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginationHandler(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          بعدی
        </button>
      </div>
    </section>
  );
}

export default Pagination;
