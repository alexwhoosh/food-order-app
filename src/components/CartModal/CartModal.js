import React, { useContext } from "react";
import ReactDOM from "react-dom";

import Cart from "./Cart";
import { Backdrop } from "./CartModal.styled";

const CartModal = ({ onClose, modalStatus }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onClick={() => onClose({ type: "modal-closed" })}
          modalStatus={modalStatus}
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
