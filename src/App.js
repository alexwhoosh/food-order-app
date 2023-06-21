import React from "react";
import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";

const App = () => {
  return (
    <>
      <Header />
      <BackgroundImg />;
      <MealsSummary />
    </>
  );
};

export default App;
