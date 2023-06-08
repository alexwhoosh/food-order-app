import React, { useContext } from "react";

import CartItem from "./CartItem/CartItem";
import OrderContext from "../../context/order-context";

const Cart = () => {
  const orderCtx = useContext(OrderContext);

  if (orderCtx.order == null) return;

  return (
    <>
      {Object.entries(orderCtx.order).map(([key, value]) => (
        <CartItem
          name={key}
          price={value.price}
          amount={value.amount}
          key={Math.random()}
        />
      ))}
    </>
  );
};

export default Cart;
