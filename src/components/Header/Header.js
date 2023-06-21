import React from "react";
import HeaderContainer from "./Header.styled";
import CartButtonContainer from "./CartButton/CartButtonContainer";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>ReactMeals</h1>
      <CartButtonContainer />
    </HeaderContainer>
  );
};

export default Header;
