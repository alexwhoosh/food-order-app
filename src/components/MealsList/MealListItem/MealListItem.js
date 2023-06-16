import React, { useRef, useContext } from "react";
import ItemAmount from "./ItemAmount/ItemAmount";
import ItemContainer from "./MealListItem.styled";
import MealPriceContainer from "./MealPrice.styled";
import OrderContext from "../../../context/order-context";
const MealListItem = ({ name, description, price, onAddMeal }) => {
  const amountRef = useRef();
  const ctx = useContext(OrderContext);
  return (
    <ItemContainer>
      <div>
        <h3>{name}</h3>
        <span>{description}</span>
        <MealPriceContainer>{`$${price}`}</MealPriceContainer>
      </div>
      <div>
        <ItemAmount
          amountRef={amountRef}
          onClick={() => {
            ctx.dispatch({ type: name, amount: +amountRef.current.value });
          }}
        />
      </div>
    </ItemContainer>
  );
};

export default MealListItem;
