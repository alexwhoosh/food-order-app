import React, { useContext } from "react";
import OrderContext from "../../../context/order-context";
import { ButtonContainer } from "../Cart/Cart.styled";
import ItemContainer, {
  Price,
  Amount,
  Summary,
  MealDetails,
  CustomButton,
} from "./CartItem.styled";

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
      <ButtonContainer>
        <CustomButton onClick={removeItem}>-</CustomButton>
        <CustomButton onClick={addItem}>+</CustomButton>
      </ButtonContainer>
    </ItemContainer>
  );
};

export default CartItem;
