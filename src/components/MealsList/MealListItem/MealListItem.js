import React, { useRef, useContext } from "react";
import ItemAmount from "./ItemAmount/ItemAmount";
import ItemContainer from "./MealListItem.styled";
import MealPriceContainer from "./MealPrice.styled";
import OrderContext from "../../../context/order-context";

const MealListItem = ({
  name,
  description,
  price,
  onAddMeal,
  totalAmount,
  setTotalAmount,
}) => {
  const amountRef = useRef();
  const orderCtx = useContext(OrderContext);

  const updateTotalAmount = (amount) => {
    setTotalAmount(totalAmount + amount);
    // console.log(totalAmount);
  };

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
            // onAddMeal(+amountRef.current.value, price, name, orderCtx.meals);
            updateTotalAmount(+amountRef.current.value);
          }}
        />
      </div>
    </ItemContainer>
  );
};

export default MealListItem;
