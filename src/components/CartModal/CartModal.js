import React, { useContext } from "react";

import Card from "../Card.styled";
import CartItem from "./CartItem/CartItem";
import OrderContext from "../../context/order-context";

const CartModal = () => {
  const orderCtx = useContext(OrderContext);

  if (orderCtx.order == null) return;

  return (
    <Card>
      {Object.entries(orderCtx.order).map(([key, value]) => (
        <CartItem
          name={key}
          price={value.price}
          amount={value.amount}
          key={Math.random()}
        />
      ))}
    </Card>
  );
};

export default CartModal;
