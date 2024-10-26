import { RiCloseLine } from "react-icons/ri";
import useModalContext from "../../../hooks/useModalContext";
import styles from "./ModalContainer.module.css";
import AddProductForm from "../ModalContent/AddProductForm";
import DeleteProductConfirmation from "../ModalContent/DeleteProductConfirmation";
import EditProductForm from "../ModalContent/EditProductForm";

function ModalContainer() {
  const { modalType, closeModal } = useModalContext();

  return (
    <div className={styles.containerModal}>
      <div className={styles.containerModal__overlay} />
      <div className={styles.containerModal__content}>
        <button className={styles.containerModal__content__closeBtn} onClick={closeModal}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        {modalType === "add" && <AddProductForm/>}
        {modalType === "edit" && <EditProductForm />}
        {modalType === "delete" && <DeleteProductConfirmation />}
      </div>
    </div>
  );
}

export default ModalContainer;
