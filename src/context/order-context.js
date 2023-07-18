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
      id: value.id,
    },
  };
}, {});

const reducer = (state, action) => {
  const mealName = action.name;
  const prevAmount = state[mealName]?.amount ?? 0;

  switch (action.type) {
    case "RESET":
      return initMeals;

    case "ADD_ITEM":
      return {
        ...state,
        [mealName]: {
          ...state[mealName],
          amount: prevAmount + action.amount,
        },
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        [mealName]: {
          ...state[mealName],
          amount: prevAmount - 1,
        },
      };

    default:
      return initMeals;
  }
};

export const OrderContextProvider = ({ children }) => {
  const [meals, dispatch] = useReducer(reducer, initMeals);

  const totalAmount = Object.values(meals).reduce(
    (acc, value) => acc + value.amount,
    0
  );

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
