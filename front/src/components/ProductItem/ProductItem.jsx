import React from "react";
import styles from "./ProductItem.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { modifiedString } from "../../utils/helpers";
function ProductItem({ product }) {
  return (
    // product info

    <tr className={styles.containerProductInfo}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{modifiedString(product.id)}</td>
      <td className={styles.containerProductInfo__actionBtns}>
        <button className={styles.containerProductInfo__actionBtns__editBtn} onClick={() => openModal("edit")}>
          <FaRegEdit />
        </button>
        <button
          className={styles.containerProductInfo__actionBtns__deleteBtn}
          onClick={() => openModal("delete")}
        >
          <AiTwotoneDelete />
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
