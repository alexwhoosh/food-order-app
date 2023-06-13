import React, { useContext } from "react";

import CartItem from "./CartItem/CartItem";
import Total, {
  CloseButton,
  OrderButton,
  ButtonContainer,
} from "./Total.styled";
import OrderContext from "../../context/order-context";
import { CartModalContainer } from "./CartModal.styled";

const Cart = ({ onClick }) => {
  const orderCtx = useContext(OrderContext);

  let content = (
    <>
      {Object.entries(orderCtx.meals)
        .filter(([_, value]) => value.amount > 0)
        .map(([key, value]) => (
          <CartItem
            name={key}
            price={value.price}
            amount={value.amount}
            key={Math.random()}
          />
        ))}
      <Total>
        <h2>Total Amount</h2>
        <span>{`price`}</span>
      </Total>
      <ButtonContainer>
        <CloseButton onClick={onClick}>Close</CloseButton>
        <OrderButton>Order</OrderButton>
      </ButtonContainer>
    </>
  );

  const totalAmount = Object.entries(orderCtx.meals)
    .map(([, value]) => value.amount)
    .reduce((acc, value) => acc + value, 0);

  if (totalAmount === 0) {
    content = (
      <div>
        <span>Nothing to show</span>
        <CloseButton onClick={onClick}>Close</CloseButton>
      </div>
    );
  }

  return <CartModalContainer>{content}</CartModalContainer>;
};

export default Cart;
