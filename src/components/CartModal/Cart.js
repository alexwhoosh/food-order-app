import React, { useContext } from "react";

import CartItem from "./CartItem/CartItem";
import OrderContext from "../../context/order-context";
import { CartModalContainer } from "./CartModal.styled";

const Cart = ({ totalAmount, setTotalAmount }) => {
  const orderCtx = useContext(OrderContext);

  if (orderCtx.meals == null) return;

  return (
    <CartModalContainer>
      {Object.entries(orderCtx.meals).map(([key, value]) => (
        <CartItem
          name={key}
          price={value.price}
          amount={value.amount}
          key={Math.random()}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
        />
      ))}
    </CartModalContainer>
  );
};

export default Cart;
