import React, { useContext } from "react";
import ReactDOM from "react-dom";

import Cart from "./Cart/Cart";
import { Backdrop } from "./Modal.styled";

const CartModal = ({ onClose, modalStatus: { backdrop } }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onClick={() => onClose({ type: "modal-closed" })}
          $modalStatus={backdrop}
        />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Cart onClose={onClose} />,
        document.getElementById("cart-modal-root")
      )}
    </>
  );
};

export default CartModal;
