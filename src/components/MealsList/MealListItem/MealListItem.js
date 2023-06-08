import React, { useRef } from "react";
import ItemAmount from "./ItemAmount/ItemAmount";
import ItemContainer from "./MealListItem.styled";
import MealPriceContainer from "./MealPrice.styled";

const MealListItem = ({ name, description, price, onAddMeal }) => {
  const amountRef = useRef();

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
          onClick={() => onAddMeal(+amountRef.current.value, price, name)}
        />
      </div>
    </ItemContainer>
  );
};

export default MealListItem;
