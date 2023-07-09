import React, { useContext } from "react";

import CartItem from "../CartItem/CartItem";
import Total, { ButtonContainer } from "./Total.styled";
import OrderContext from "../../../context/order-context";
import { ModalContainer } from "../Modal.styled";
import EmptyCart from "./EmptyCart/EmptyCart";
import Button from "../../UI/Button.styled";

const Cart = ({ onClose }) => {
  const orderCtx = useContext(OrderContext);

  const totalAmount = Object.values(orderCtx.meals)
    .map((value) => value.amount)
    .reduce((acc, value) => acc + value, 0);

  const totalPrice = Object.values(orderCtx.meals)
    .filter((value) => value.amount > 0)
    .map((value) => value.price * value.amount)
    .reduce((acc, value) => acc + value, 0);

  const onClick = (actionType) => {
    onClose({ type: actionType });
    if (actionType === "order-confirmed") {
      orderCtx.dispatch({ type: "reset" });
    }
  };

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
        <h2>Total Price</h2>
        <span>{`$${parseFloat(totalPrice.toFixed(2))}`}</span>
      </Total>
      <ButtonContainer>
        <Button className="close" onClick={() => onClick("modal-closed")}>
          Close
        </Button>
        <Button className="order" onClick={() => onClick("order-confirmed")}>
          Order
        </Button>
      </ButtonContainer>
    </>
  );

  if (totalAmount === 0) {
    content = <EmptyCart onClick={onClick} />;
  }

  return <ModalContainer>{content}</ModalContainer>;
};

export default Cart;
