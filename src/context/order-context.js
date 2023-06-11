import React from "react";

export const OrderContext = React.createContext({
  setOrder: () => {},
  addItem: () => {},
  meals: null,
  updateMeals: () => {},
});

export const meals = {};

export const OrderContextProvider = ({ children }) => {
  const updateMeals = (name, price, amount) => {
    meals[name] = {
      amount: amount,
      price: price,
    };
  };

  const addHandler = (amount, price, name, meals) => {
    if (amount <= 0) return;

    if (meals[name]) {
      const meal = meals[name];
      const mealAmount = +meal.amount + amount;
      const mealPrice = parseFloat((price * mealAmount).toFixed(2));

      updateMeals(name, mealPrice, mealAmount);
      return;
    }

    const mealPrice = parseFloat((price * amount).toFixed(2));

    updateMeals(name, mealPrice, amount);
  };

  return (
    <OrderContext.Provider
      value={{
        addItem: addHandler,
        meals,
        updateMeals,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
