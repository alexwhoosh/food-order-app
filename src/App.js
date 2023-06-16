import React, { useReducer } from "react";
import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import MealsList from "./components/MealsList/MealsList";
import DUMMY_MEALS from "./components/MealsList/dummy-meals";
import { OrderContextProvider } from "./context/order-context";
import CartModal from "./components/CartModal/CartModal";
import OrderConfirmedModal from "./components/CartModal/OrderConfirmedModal";

const initModalState = {
  backdrop: false,
  cart: false,
  confirm: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "cart-open": {
      return {
        backdrop: true,
        cart: true,
        confirm: false,
      };
    }
    case "order-confirmed": {
      return {
        backdrop: true,
        cart: false,
        confirm: true,
      };
    }
    case "modal-closed": {
      return {
        ...initModalState,
      };
    }
  }
};

const App = () => {
  const [modal, dispatch] = useReducer(reducer, initModalState);
  console.log(modal);

  return (
    <OrderContextProvider>
      <Header onClick={dispatch} />
      <BackgroundImg />
      <MealsSummary />
      <MealsList items={DUMMY_MEALS} />
      {modal.cart && <CartModal onClose={dispatch} modalStatus={modal} />}
      {modal.confirm && (
        <OrderConfirmedModal onClose={dispatch} modalStatus={modal} />
      )}
    </OrderContextProvider>
  );
};

export default App;
