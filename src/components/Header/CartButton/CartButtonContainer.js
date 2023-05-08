import React, { useContext } from "react";
import CartButton from "./CartButton.styled";
import CartIcon from "./CartIcon";
import Badge from "./Badge.styled";
import Container from "./CartButtonContainer.styled";
import AmountContext from "../../../context/amount-context";

const CartButtonContainer = () => {
  const ctx = useContext(AmountContext);

  return (
    <Container>
      <CartButton>
        <CartIcon />
        <span>Your Cart</span>
        <Badge>{ctx.amount}</Badge>
      </CartButton>
    </Container>
  );
};

export default CartButtonContainer;
