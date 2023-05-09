import React, { useState } from "react";

const OrderContext = React.createContext({
  order: {},
  setOrder: () => {},
});

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState({});

  const updateOrder = (meals) => {
    setOrder(meals);
  };

  return (
    <OrderContext.Provider value={{ order: order, setOrder: updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
