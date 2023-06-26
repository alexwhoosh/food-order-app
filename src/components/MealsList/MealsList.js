import React, { useContext } from "react";
import ListContainer from "./MealsList.styled";
import MealListItem from "./MealListItem/MealListItem";
import Card from "../UI/Card.styled";
import OrderContext from "../../context/order-context";

const MealsList = ({ items }) => {
  const orderCtx = useContext(OrderContext);

  return (
    <Card>
      <ListContainer>
        <ul>
          {items.map((dish) => (
            <MealListItem
              key={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              onAddMeal={orderCtx.addItem}
            />
          ))}
        </ul>
      </ListContainer>
    </Card>
  );
};

export default MealsList;
