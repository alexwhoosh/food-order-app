import React from "react";
import ReactDOM from "react-dom";

import Cart from "./Cart";
import { Backdrop } from "./CartModal.styled";

const CartModal = ({ onClose, modalActive }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} modalActive={modalActive} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Cart onClick={onClose} />,
        document.getElementById("cart-modal-root")
      )}
    </>
  );
};

export default CartModal;
