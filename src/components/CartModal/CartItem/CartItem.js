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

  const priceList = {};

  for (let meal of DUMMY_MEALS) {
    priceList[meal.name] = meal.price;
  }

  const addItem = () => {
    const originalPrice = priceList[name];
    const newPrice = parseFloat((itemPrice + originalPrice).toFixed(2));
    setItemPrice(newPrice);
    setItemAmount(++itemAmount);
    // setTotalAmount(++totalAmount);

    orderCtx.updateMeals(name, itemPrice, itemAmount);
  };

  const removeItem = () => {
    const originalPrice = priceList[name];
    const newPrice = parseFloat((itemPrice - originalPrice).toFixed(2));
    setItemPrice(newPrice);
    setItemAmount(--itemAmount);
    // setTotalAmount(--totalAmount);

    orderCtx.updateMeals(name, itemPrice, itemAmount);
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
