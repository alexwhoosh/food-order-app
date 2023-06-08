import React from "react";

import Cart from "./Cart";
import { Backdrop, CartModalContainer } from "./CartModal.styled";

const CartModal = () => {
  return (
    <Backdrop>
      <CartModalContainer>
        <Cart />
      </CartModalContainer>
    </Backdrop>
  );
};

export default CartModal;
