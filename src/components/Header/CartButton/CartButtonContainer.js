import React from "react";
import CartButton from "./CartButton.styled";
import CartIcon from "./CartIcon";
import Badge from "./Badge.styled";
import Container from "./CartButtonContainer.styled";

const CartButtonContainer = () => {
  return (
    <Container>
      <CartButton>
        <CartIcon />
        <span>Your Cart</span>
        <Badge>0</Badge>
      </CartButton>
    </Container>
  );
};

export default CartButtonContainer;
