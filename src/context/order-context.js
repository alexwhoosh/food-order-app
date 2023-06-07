import React, { useState } from "react";

const OrderContext = React.createContext({
  order: null,
  setOrder: () => {},
});

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const updateOrder = (meals) => {
    setOrder((prevOrder) => {
      return {
        ...prevOrder,
        ...meals,
      };
    });
  };
  console.log("hi");

  return (
    <OrderContext.Provider value={{ order: order, setOrder: updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
