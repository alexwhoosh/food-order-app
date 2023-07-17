import React, { useContext, useState, useEffect } from "react";
import CartButton from "./CartButton/CartButton.styled";
import CartIcon from "./CartIcon/CartIcon";
import Badge from "./CartButton/Badge.styled";
import Container from "./CartButtonContainer.styled";
import OrderContext from "../../../context/order-context";

const CartButtonContainer = ({ onClick }) => {
  const { totalAmount } = useContext(OrderContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnAmimation = btnIsHighlighted ? "bump" : "";

  useEffect(() => {
    if (totalAmount === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);

  return (
    <Container>
      <CartButton
        className={btnAmimation}
        onClick={() => onClick({ type: "cart-open" })}
      >
        <CartIcon />
        <span>Your Cart</span>
        <Badge>{totalAmount}</Badge>
      </CartButton>
    </Container>
  );
};

export default CartButtonContainer;
