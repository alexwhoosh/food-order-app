import React, { useReducer } from "react";

import DUMMY_MEALS from "../components/Meals/MealsList/dummy-meals";

export const OrderContext = React.createContext({
  meals: {},
  dispatch: () => {},
  totalAmount: 0,
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

  const totalAmount = Object.entries(meals)
    .map(([, value]) => value.amount)
    .reduce((acc, value) => acc + value, 0);

  return (
    <OrderContext.Provider
      value={{
        meals,
        dispatch,
        totalAmount,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
