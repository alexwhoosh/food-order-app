import React, { useContext } from "react";
import ReactDOM from "react-dom";

import Cart from "./Cart";
import { Backdrop } from "./CartModal.styled";
import OrderConfirmedModal from "./OrderConfirmedModal";
import OrderContext from "../../context/order-context";

const CartModal = ({ onClose, modalActive }) => {
  const ctx = useContext(OrderContext);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} modalActive={modalActive} />,
        document.getElementById("backdrop-root")
      )}
      {modalActive &&
        ReactDOM.createPortal(
          <Cart onClick={onClose} />,
          document.getElementById("cart-modal-root")
        )}
      {ctx.orderStatus &&
        ReactDOM.createPortal(
          <OrderConfirmedModal />,
          document.getElementById("cart-modal-root")
        )}
    </>
  );
};

export default CartModal;
