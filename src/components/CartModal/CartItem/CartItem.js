import React, { useContext } from "react";
import OrderContext from "../../../context/order-context";

import ItemContainer, {
  Price,
  Amount,
  Summary,
  MealDetails,
  ButtonsContainer,
} from "./CartItem.styled";
import Button from "../../UI/Button.styled";

const CartItem = ({ name, price, amount }) => {
  const orderCtx = useContext(OrderContext);

  const addItem = () => {
    orderCtx.dispatch({ type: name, amount: 1 });
  };

  const removeItem = () => {
    orderCtx.dispatch({ type: name, amount: -1 });
  };

  const totalPrice = parseFloat((amount * price).toFixed(2));

  return (
    <ItemContainer>
      <MealDetails>
        <h3>{name}</h3>
        <Summary>
          <Price>{`$${totalPrice}`}</Price>
          <Amount>{`x ${amount}`}</Amount>
        </Summary>
      </MealDetails>
      <ButtonsContainer>
        <Button type="button" onClick={removeItem}>
          -
        </Button>
        <Button type="button" onClick={addItem}>
          +
        </Button>
      </ButtonsContainer>
    </ItemContainer>
  );
};

export default CartItem;
