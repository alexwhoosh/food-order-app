import React, { useContext } from "react";
import CartButton from "./CartButton.styled";
import CartIcon from "./CartIcon";
import Badge from "./Badge.styled";
import Container from "./CartButtonContainer.styled";
import OrderContext from "../../../context/order-context";

const CartButtonContainer = ({ onClick }) => {
  const ctx = useContext(OrderContext);

  return (
    <Container>
      <CartButton onClick={() => onClick({ type: "cart-open" })}>
        <CartIcon />
        <span>Your Cart</span>
        <Badge>{ctx.totalAmount}</Badge>
      </CartButton>
    </Container>
  );
};

export default CartButtonContainer;
