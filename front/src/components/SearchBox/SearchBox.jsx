import React from "react";
import styles from "./SearchBox.module.css";
import { IoIosSearch } from "react-icons/io";

function SearchBox() {
  return (
    <section className={styles.containerSearch}>
      <button className={styles.containerSearch__searchBtn}>
        <IoIosSearch />
      </button>

      <input
        type="text"
        placeholder="جستجو کالا"
        className={styles.containerSearch__searchInput}
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
