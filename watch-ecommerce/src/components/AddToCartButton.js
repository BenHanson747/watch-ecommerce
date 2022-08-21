import { useState } from "react";

function AddToCartButton() {
  const [cart, setCart] = useState([]);

  const handleAddItem = (cartData) => {
    setCart([...cart, cartData]);
  };

  return (
    <button className="button home__button" onClick={handleAddItem}>
      ADD TO CART
    </button>
  );
}

export default AddToCartButton;
