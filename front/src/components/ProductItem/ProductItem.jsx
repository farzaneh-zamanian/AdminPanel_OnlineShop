import React from "react";
import styles from "./ProductItem.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { modifiedString } from "../../utils/helpers";
import useModalContext from "../../hooks/useModalContext";
import ModalContainer from "../modal/modalContainer/modalContainer";
function ProductItem({ product }) {
  const { modalType, openModal } = useModalContext();

  return (
    // product info

    <tr key={product.id} className={styles.containerProductInfo}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{modifiedString(product.id)}</td>
      <td className={styles.containerProductInfo__actionBtns}>
        <button
          className={styles.containerProductInfo__actionBtns__editBtn}
          onClick={() => openModal("edit")}
        >
          <FaRegEdit />
        </button>
        <button
          className={styles.containerProductInfo__actionBtns__deleteBtn}
          onClick={() => openModal("delete", product.id)}
        >
          <AiTwotoneDelete />
        </button>
      </td>
      {/* Render the modal  */}
      {modalType && <ModalContainer  />}
    </tr>
  );
}

export default ProductItem;
