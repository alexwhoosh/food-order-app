import React, { useContext } from "react";

import CartItem from "./CartItem/CartItem";
import Total, {
  CloseButton,
  OrderButton,
  ButtonContainer,
} from "./Total.styled";
import OrderContext from "../../context/order-context";
import { ModalContainer } from "./Modal.styled";
import EmptyCartContainer, { ImgContainer } from "./Cart.styled";
import { ButtonsContainer } from "./CartItem/CartItem.styled";
import { Button } from "./Cart.styled";
import image from "./img/empty.png";

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
        <CloseButton onClick={() => onClick("modal-closed")}>Close</CloseButton>
        <OrderButton onClick={() => onClick("order-confirmed")}>
          Order
        </OrderButton>
      </ButtonContainer>
    </>
  );

  if (totalAmount === 0) {
    content = (
      <EmptyCartContainer>
        <h2>Your cart is empty</h2>
        <ImgContainer>
          <img src={image} alt="empty cart" />
        </ImgContainer>

        <span>Looks like you haven't ordered anything yet</span>
        <div>
          <Button onClick={() => onClick("modal-closed")}>OK</Button>
        </div>
      </EmptyCartContainer>
    );
  }

  return <ModalContainer>{content}</ModalContainer>;
};

export default Cart;
