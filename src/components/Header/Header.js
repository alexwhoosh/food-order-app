import React from "react";
import HeaderContainer from "./Header.styled";
import CartButtonContainer from "./CartButtonContainer/CartButtonContainer";

const Header = ({ onClick }) => {
  return (
    <HeaderContainer>
      <h1>ReactMeals</h1>
      <CartButtonContainer onClick={onClick} />
    </HeaderContainer>
  );
};

export default Header;
