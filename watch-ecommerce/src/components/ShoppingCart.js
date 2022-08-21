import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
// import CartItem from './ShoppingCartItem';
import CheckoutButton from "./CartCheckout";

function ShoppingBasket() {
  const [showBasket, setShowBasket] = useState(false);

  const toggleBasket = () => {
    setShowBasket(!showBasket);
  };

  return (
    <>
      <div className="nav__shop" onClick={toggleBasket}>
        <FaShoppingBasket />
      </div>

      <div className={showBasket ? "cart show-cart" : "cart"} id="cart">
        <div className="cart__close" onClick={toggleBasket}>
          <IoCloseCircleSharp />
        </div>

        <h2 className="cart__title-center">My Cart</h2>
        <p className="empty__cart-text">Your cart is empty</p>
        <CartItem />
        <CartItem />

        <div className="cart__prices">
          <span className="cart__prices-item">3 items</span>
          <span className="cart__prices-total">$2880</span>
        </div>
        <CheckoutButton />
      </div>
    </>
  );
}

export default ShoppingBasket;
