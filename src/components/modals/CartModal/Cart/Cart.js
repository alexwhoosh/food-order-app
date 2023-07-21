import React, { useContext } from "react";

import OrderContext from "../../../../context/order-context";
import EmptyCart from "./EmptyCart/EmptyCart";
import FullCart from "./FullCart";

const Cart = ({ onClose }) => {
  const orderCtx = useContext(OrderContext);

  const totalAmount = Object.values(orderCtx.meals)
    .map((value) => value.amount)
    .reduce((acc, value) => acc + value, 0);

  const onClick = (actionType) => {
    onClose({ type: actionType });
    if (actionType === "order-confirmed") {
      orderCtx.dispatch({ type: "RESET" });
    }
  };

  if (totalAmount === 0) {
    return <EmptyCart onClick={onClick} />;
  }

  return <FullCart onClick={onClick} />;
};

export default Cart;
