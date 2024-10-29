import React, { useState } from "react";
import styles from "./SearchBox.module.css";
import { IoIosSearch } from "react-icons/io";
import { useGetAllProduct } from "../../hooks/queries";
import useModalContext from "../../hooks/useModalContext";

function SearchBox() {
  //STATE
  const [search, setSearch] = useState("");
  const { filteredSearchedProducts, setFilteredSearchedProducts } =
    useModalContext();
  //DATA
  const { data } = useGetAllProduct();

  //ACTION- SEARCH HANDLER
  const handleSearch = () => {
    if (data) {
      const results = data.data.filter((product) =>
        product.name.toLowerCase().trim().includes(search.toLowerCase().trim())
      );
      if(results) setFilteredSearchedProducts(results);
    } else {
      console.log("not found");
    }
  };
  return (
    <section className={styles.containerSearch}>
      <button
        onClick={handleSearch}
        className={styles.containerSearch__searchBtn}
      >
        <IoIosSearch />
      </button>

      <input
        type="text"
        placeholder="جستجو نام کالا"
        className={styles.containerSearch__searchInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <section className={styles.containerAdminInfo}>
        <div className={styles.containerAdminInfo__image}>
          <img src="./src/assets/images/admin-picture.jpg" />
        </div>
        <p className={styles.containerAdminInfo__name}>
          <span>فرزانه زمانیان</span>
          <span>مدیر </span>
        </p>
      </section>
    </section>
  );
}

export default SearchBox;
