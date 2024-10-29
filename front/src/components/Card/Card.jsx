import React from "react";
import styles from "./Card.module.css";

import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import image4 from "../../assets/images/tShirt4.jpg";

function Card({ product }) {
  const { id, name, quantity, price } = product; //DESCTRUCTURING

  // ACTION - CARD BUTTON ACTIONS
  const cardBtnHandler = () => {
    console.log(id);
  };

  return (
    <div className={styles.cardContainer}>
      <img src={image4} alt={name} />
      <h3>{name}</h3>
      <p>{price} $</p>
      <div className={styles.actionsContainer}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => cardBtnHandler()}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && <button onClick={() => cardBtnHandler()}>-</button>}
          {!!quantity && <span>{quantity}</span>}
          {/* if productQuantity is truthy */}
          {quantity === 0 ? (
            <button onClick={() => cardBtnHandler()}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => cardBtnHandler()}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
