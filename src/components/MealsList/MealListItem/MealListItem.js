import React, { useRef, useContext } from "react";
import ItemAmount from "./ItemAmount/ItemAmount";
import ItemContainer, {
  PriceContainer,
  AmountContainer,
} from "./MealListItem.styled";
import OrderContext from "../../../context/order-context";

const MealListItem = ({ name, description, price }) => {
  const ref = useRef(0);
  const ctx = useContext(OrderContext);

  return (
    <ItemContainer>
      <div>
        <h3>{name}</h3>
        <span>{description}</span>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </div>
      <AmountContainer>
        <ItemAmount
          ref={ref}
          totalAmount={ctx.totalAmount}
          onClick={() => {
            ctx.dispatch({ type: name, amount: +ref.current.value });
          }}
        />
      </AmountContainer>
    </ItemContainer>
  );
};

export default MealListItem;
