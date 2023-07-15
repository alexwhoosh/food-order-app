import React from "react";
import BackgroundImgContainer from "./BackgroundImg.styled";
import image from "../../assets/images/meals.jpg";

const BackgroundImg = () => {
  return (
    <BackgroundImgContainer>
      <img src={image} alt="A table full of various dishes" />;
    </BackgroundImgContainer>
  );
};

export default BackgroundImg;
