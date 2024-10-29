import styles from "./AdminPage.module.css";
import SearchBox from "../../components/SearchBox/SearchBox";
import ProductView from "../../components/ProductView/ProductView";
import Pagination from "../../components/Pagination/Pagination";

function AdminPage() {
  return (
    <main className={styles.containerAdminPage}>
      {/* SECTION - SEARCH BOX */}
      <SearchBox />
      {/* SECTION - PRODUCUT MANAGEMENT */}
      <ProductView />
      {/* SECTION - PAGINATION*/}
      <Pagination />
    </main>
  );
}

export default AdminPage;
