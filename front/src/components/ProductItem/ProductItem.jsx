import React from "react";
import styles from "./ProductItem.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { modifiedString } from "../../utils/helpers";
import useModalContext from "../../hooks/useModalContext";
import ModalContainer from "../modal/modalContainer/modalContainer";

function ProductItem({ product, index, selectedIds, setSelectedIds }) {
  const { modalType, openModal } = useModalContext();

  const handleCheckboxChange = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);

    }
  };

  return (
    // PRODUCT INFO
    <>
      <tr key={product.id} className={styles.containerProductInfo}>
        <td>
         <input
          type="checkbox"
          checked={selectedIds.includes(product.id)}
          onChange={() => handleCheckboxChange(product.id)}
        />
        </td>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>{modifiedString(product.id)}</td>
        <td className={styles.containerProductInfo__actionBtns}>
          <button
            className={styles.containerProductInfo__actionBtns__editBtn}
            onClick={() => openModal("edit", product)}
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
        {/* RENDET THE MODAL  */}
        {modalType && <ModalContainer />}
      </tr>
    </>
  );
}
export default ProductItem;
