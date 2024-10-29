import styles from "./AdminPage.module.css";
import SearchBox from "../../components/SearchBox/SearchBox";
import ProductView from "../../components/ProductView/ProductView";
import Pagination from "../../components/Pagination/Pagination";
import useModalContext from "../../hooks/useModalContext";

function AdminPage() {
  const {notification, setNotification} = useModalContext()
  return (
    <main className={styles.containerAdminPage}>
      <div className={styles.notifications}>{notification}</div>
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
