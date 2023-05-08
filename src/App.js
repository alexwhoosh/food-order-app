import React from "react";
import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import MealsList from "./components/MealsList/MealsList";
import DUMMY_MEALS from "./components/MealsList/dummy-meals";
import { AmountContextProvider } from "./context/amount-context";

const App = () => {
  return (
    <AmountContextProvider>
      <Header />
      <BackgroundImg />;
      <MealsSummary />
      <MealsList items={DUMMY_MEALS} />
    </AmountContextProvider>
  );
};

export default App;
