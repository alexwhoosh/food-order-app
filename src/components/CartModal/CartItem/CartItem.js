import React, { useContext, useState } from "react";
import OrderContext from "../../../context/order-context";
import DUMMY_MEALS from "../../MealsList/dummy-meals";

import ItemContainer, {
  Price,
  Amount,
  Summary,
  MealDetails,
  Button,
  ButtonsContainer,
} from "./CartItem.styled";

const CartItem = ({ name, price, amount, totalAmount, setTotalAmount }) => {
  const orderCtx = useContext(OrderContext);
  let [itemAmount, setItemAmount] = useState(amount);
  let [itemPrice, setItemPrice] = useState(price);

  const addItem = () => {
    setItemAmount(++itemAmount);
    setTotalAmount(++totalAmount);
    const newPrice = parseFloat((itemPrice * itemAmount).toFixed(2));
    setItemPrice(newPrice);

    // console.log("Adding item: ", originalPrice, itemPrice, price);

    orderCtx.updateMeals(name, itemAmount);
  };

  const removeItem = () => {
    setItemAmount(--itemAmount);
    setTotalAmount(--totalAmount);
    const newPrice = parseFloat((itemPrice * itemAmount).toFixed(2));
    setItemPrice(newPrice);

    orderCtx.updateMeals(name, itemAmount);
  };

  return (
    <ItemContainer>
      <MealDetails>
        <h2>{name}</h2>
        <Summary>
          <Price>{`$${itemPrice}`}</Price>
          <Amount>{`x ${itemAmount}`}</Amount>
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
