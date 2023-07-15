import React from "react";
import ListContainer from "./MealsList.styled";
import MealListItem from "./MealListItem/MealListItem";
import Card from "../../UI/Card.styled";

const MealsList = ({ items }) => {
  return (
    <Card>
      <ListContainer>
        <ul>
          {items.map((dish) => (
            <MealListItem
              id={dish.id}
              key={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
            />
          ))}
        </ul>
      </ListContainer>
    </Card>
  );
};

export default MealsList;
