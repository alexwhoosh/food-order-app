import React, { useContext } from "react";
import ListContainer from "./MealsList.styled";
import MealListItem from "./MealListItem/MealListItem";
import Card from "../Card.styled";
import AmountContext from "../../context/amount-context";
import OrderContext from "../../context/order-context";

const meals = new Map();

const MealsList = ({ items }) => {
  const amountCtx = useContext(AmountContext);
  const orderCtx = useContext(OrderContext);

  const addHandler = (amount, price, name) => {
    if (amount <= 0) return;

    const currentAmount = (amountCtx.amount += amount);
    amountCtx.setAmount(currentAmount);

    console.log(amountCtx.amount);

    if (meals.has(name)) {
      const meal = meals.get(name);
      const mealAmount = +meal.amount + amount;
      meals.set(name, { amount: mealAmount, price: price * mealAmount });

      orderCtx.setOrder(meals);
      console.log(meals);

      return;
    }

    meals.set(name, {
      amount,
      price: price * amount,
    });

    orderCtx.setOrder(meals);
    console.log(meals);
  };

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
              onAddMeal={addHandler}
            />
          ))}
        </ul>
      </ListContainer>
    </Card>
  );
};

export default MealsList;
