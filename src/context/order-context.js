import React, { useReducer, useState } from "react";

import DUMMY_MEALS from "../components/MealsList/dummy-meals";

export const OrderContext = React.createContext({
  meals: {},
  dispatch: () => {},
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

const reducer = (state, action) => {
  if (action.type === "reset") {
    return initMeals;
  }

  const mealName = action.type;
  const prevAmount = state[mealName].amount;

  const result = {
    ...state,
    [mealName]: {
      ...state[mealName],
      amount: prevAmount + action.amount,
    },
  };

  return result;
};

export const OrderContextProvider = ({ children }) => {
  const [meals, dispatch] = useReducer(reducer, initMeals);

  return (
    <OrderContext.Provider
      value={{
        meals,
        dispatch,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
