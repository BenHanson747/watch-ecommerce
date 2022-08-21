import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import product from "./ProductData";

function CartItem() {
  const renderBasedOnID = product.filter((x) => x.id === 1);
  const [addMinusItem, setAddMinusItem] = useState(1);
  const [deleteItem, setDeleteitem] = useState(true);

  const increment = () => {
    setAddMinusItem(addMinusItem + 1);
  };

  const decrement = () => {
    if (addMinusItem === 1) {
      return;
    }
    setAddMinusItem(addMinusItem - 1);
  };

  const removeItem = () => {
    setDeleteitem(!deleteItem);
  };

  return (
    <article>
      {renderBasedOnID.map((x) => (
        <div key={x.id} className={deleteItem ? "cart__card" : "hidden"}>
          <div className="cart__box">
            <img src={x.img} alt={x.alt} className="cart__img" />
          </div>

          <div className="cart__details">
            <h3 className="cart__title">{x.title}</h3>
            <p className="cart__title">{x.brand}</p>
            <span className="cart__price">
              £
              {(x.price * addMinusItem).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>

            <div className="cart__amount">
              <div className="cart__amount-content">
                <span className="cart__amount-box" onClick={decrement}>
                  <AiOutlineMinusCircle />
                </span>

                <span className="cart__amount-number">{addMinusItem}</span>

                <span className="cart__amount-box" onClick={increment}>
                  <AiOutlinePlusCircle />
                </span>
              </div>

              <span className="cart__amount-trash" onClick={removeItem}>
                <FaTrash />
              </span>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
}

export default CartItem;
