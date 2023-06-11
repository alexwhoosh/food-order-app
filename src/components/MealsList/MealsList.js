import React, { useContext } from "react";
import ListContainer from "./MealsList.styled";
import MealListItem from "./MealListItem/MealListItem";
import Card from "../Card.styled";
import OrderContext from "../../context/order-context";

const MealsList = ({ items, totalAmount, setTotalAmount }) => {
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
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
          ))}
        </ul>
      </ListContainer>
    </Card>
  );
};

export default MealsList;
