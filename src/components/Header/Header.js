import React from "react";
import HeaderContainer from "./Header.styled";
import CartButtonContainer from "./CartButton/CartButtonContainer";

const Header = ({ onClick, totalAmount }) => {
  return (
    <HeaderContainer>
      <h1>ReactMeals</h1>
      <CartButtonContainer onClick={onClick} totalAmount={totalAmount} />
    </HeaderContainer>
  );
};

export default Header;
