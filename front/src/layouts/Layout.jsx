import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
