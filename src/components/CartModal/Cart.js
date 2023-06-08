import React, { useContext } from "react";

import CartItem from "./CartItem/CartItem";
import OrderContext from "../../context/order-context";
import { CartModalContainer } from "./CartModal.styled";

const Cart = () => {
  const orderCtx = useContext(OrderContext);

  if (orderCtx.order == null) return;

  return (
    <CartModalContainer>
      {Object.entries(orderCtx.order).map(([key, value]) => (
        <CartItem
          name={key}
          price={value.price}
          amount={value.amount}
          key={Math.random()}
        />
      ))}
    </CartModalContainer>
  );
};

export default Cart;
