import React, { useContext } from "react";
import CartButton from "./CartButton.styled";
import CartIcon from "./CartIcon";
import Badge from "./Badge.styled";
import Container from "./CartButtonContainer.styled";
import OrderContext from "../../../context/order-context";

const CartButtonContainer = ({ onClick }) => {
  const ctx = useContext(OrderContext);
  const totalAmount = Object.entries(ctx.meals)
    .map(([, value]) => value.amount)
    .reduce((acc, value) => acc + value, 0);

  return (
    <Container>
      <CartButton onClick={() => onClick({ type: "cart-open" })}>
        <CartIcon />
        <span>Your Cart</span>
        <Badge>{totalAmount}</Badge>
      </CartButton>
    </Container>
  );
};

export default CartButtonContainer;
