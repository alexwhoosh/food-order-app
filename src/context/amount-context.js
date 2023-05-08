import React, { useState } from "react";

const AmountContext = React.createContext({
  amount: 0,
  setAmount: () => {},
});

export const AmountContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  const updateAmount = (amount) => {
    setAmount(amount);
  };

  return (
    <AmountContext.Provider value={{ amount, setAmount: updateAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export default AmountContext;
