import React from "react";
import ReactDOM from "react-dom";

import Cart from "./Cart";
import { Backdrop } from "./CartModal.styled";

const CartModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Cart />,
        document.getElementById("cart-modal-root")
      )}
    </>
  );
};

export default CartModal;
