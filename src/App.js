import React, { useState } from "react";
import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import MealsList from "./components/MealsList/MealsList";
import DUMMY_MEALS from "./components/MealsList/dummy-meals";
import { OrderContextProvider } from "./context/order-context";
import CartModal from "./components/CartModal/CartModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const OnShowModal = () => {
    setShowModal(true);
  };

  return (
    <OrderContextProvider>
      <Header onClick={OnShowModal} />
      <BackgroundImg />;
      <MealsSummary />
      <MealsList items={DUMMY_MEALS} />
      {showModal && <CartModal onClose={closeModal} modalActive={showModal} />}
    </OrderContextProvider>
  );
};

export default App;
