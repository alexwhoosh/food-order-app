import React from "react";

import DUMMY_MEALS from "../components/MealsList/dummy-meals";

export const OrderContext = React.createContext({
  setOrder: () => {},
  addItem: () => {},
  meals: {},
  updateMeals: () => {},
});

const meals = DUMMY_MEALS.reduce((acum, value) => {
  return {
    ...acum,
    [value.name]: {
      amout: 0,
      price: value.price,
    },
  };
}, {});

export const OrderContextProvider = ({ children }) => {
  const updateMeals = (name, amount, price) => {
    // meals[name] = {
    //   amount: amount,
    //   price: price,
    // };
    // console.log("Updating: ", meals);
  };

  const addItem = (amount, price, name, meals) => {
    if (amount <= 0) return;

    if (meals[name]) {
      const meal = meals[name];
      const mealAmount = +meal.amount + amount;

      updateMeals(name, mealAmount);
      return;
    }

    updateMeals(name, amount, price);
  };

  return (
    <OrderContext.Provider
      value={{
        meals,
        addItem,
        updateMeals,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
