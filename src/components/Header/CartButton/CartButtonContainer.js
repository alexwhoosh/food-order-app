import React from "react";
import CartButton from "./CartButton.styled";
import CartIcon from "./CartIcon";
import Badge from "./Badge.styled";
import Container from "./CartButtonContainer.styled";

const CartButtonContainer = ({ onClick, totalAmount }) => {
  return (
    <Container>
      <CartButton onClick={onClick}>
        <CartIcon />
        <span>Your Cart</span>
        <Badge>{totalAmount}</Badge>
      </CartButton>
    </Container>
  );
};

export default CartButtonContainer;
