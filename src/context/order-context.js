import React, { useState } from "react";

import DUMMY_MEALS from "../components/MealsList/dummy-meals";

export const OrderContext = React.createContext({
  setOrder: () => {},
  addItem: () => {},
  meals: {},
  updateMeals: () => {},
});

const initMeals = DUMMY_MEALS.reduce((acum, value) => {
  return {
    ...acum,
    [value.name]: {
      amount: 0,
      price: value.price,
    },
  };
}, {});

export const OrderContextProvider = ({ children }) => {
  const [meals, setMeals] = useState(initMeals);

  const updateMeals = (name, amount) => {
    setMeals((prevMeals) => {
      return {
        ...prevMeals,
        [name]: {
          ...prevMeals[name],
          amount,
        },
      };
    });
  };

  const addItem = (amount, name) => {
    const meal = meals[name];

    if (meal) {
      updateMeals(name, meal.amount + amount);
    }
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
