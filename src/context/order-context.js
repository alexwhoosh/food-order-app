import React, { useState, useReducer } from "react";

import DUMMY_MEALS from "../components/MealsList/dummy-meals";

export const OrderContext = React.createContext({
  setOrder: () => {},
  addItem: () => {},
  meals: {},
  updateMeals: () => {},
  orderStatus: false,
  setOrderStatus: () => {},
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

  const result = {
    ...state,
    [action.type]: {
      ...state[action.type],
      amount: state[action.type].amount + action.amount,
    },
  };
  console.log(action);

  console.log(result);
  return result;
};

export const OrderContextProvider = ({ children }) => {
  // const [meals, setMeals] = useState(initMeals);
  const [meals, dispatch] = useReducer(reducer, initMeals);

  // const updateOrderStatus = (value) => {
  //   setOrderStatus(value);
  // };

  // const updateMeals = (name, amount) => {
  //   setMeals((prevMeals) => {
  //     return {
  //       ...prevMeals,
  //       [name]: {
  //         ...prevMeals[name],
  //         amount,
  //       },
  //     };
  //   });
  // };

  // const addItem = (amount, name) => {
  //   const meal = meals[name];

  //   if (meal) {
  //     updateMeals(name, meal.amount + amount);
  //   }
  // };

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
