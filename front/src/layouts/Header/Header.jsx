import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { RiAdminLine } from "react-icons/ri";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <h1>OnlineShop</h1>
      </Link>
      <nav className={styles.headerContainer__navbar}>
        <ul>
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="products">محصولات</NavLink>
          </li>

        </ul>
      </nav>
      <Link to="/admin" className={styles.headerContainer__adminIcon}><RiAdminLine /></Link>
    </header>
  );
}

export default Header;
