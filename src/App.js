import React from "react";
import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import MealsList from "./components/MealsList/MealsList";
import DUMMY_MEALS from "./components/MealsList/dummy-meals";
import { AmountContextProvider } from "./context/amount-context";
import { OrderContextProvider } from "./context/order-context";

const App = () => {
  return (
    <OrderContextProvider>
      <AmountContextProvider>
        <Header />
        <BackgroundImg />;
        <MealsSummary />
        <MealsList items={DUMMY_MEALS} />
      </AmountContextProvider>
    </OrderContextProvider>
  );
};

export default App;
