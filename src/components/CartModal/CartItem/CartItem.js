import React, { useContext } from "react";
import AmountContext from "../../../context/amount-context";

import ItemContainer, {
  Price,
  Amount,
  Summary,
  MealDetails,
  Button,
  ButtonsContainer,
} from "./CartItem.styled";

const CartItem = ({ name, price, amount }) => {
  const amountCtx = useContext(AmountContext);

  const addItem = (amount) => {
    amountCtx.setAmount(++amount);
  };

  const removeItem = (amount) => {
    amountCtx.setAmount(--amount);
  };

  return (
    <ItemContainer>
      <MealDetails>
        <h2>{name}</h2>
        <Summary>
          <Price>{`$${price}`}</Price>
          <Amount>{`x ${amountCtx.amount}`}</Amount>
        </Summary>
      </MealDetails>
      <ButtonsContainer>
        <Button type="button" onClick={() => removeItem(amountCtx.amount)}>
          -
        </Button>
        <Button type="button" onClick={() => addItem(amountCtx.amount)}>
          +
        </Button>
      </ButtonsContainer>
    </ItemContainer>
  );
};

export default CartItem;
