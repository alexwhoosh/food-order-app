import React from "react";
import BackgroundImgContainer from "./BackgroundImg.styled";
import image from "./images/meals.jpg";

const BackgroundImg = () => {
  return (
    <BackgroundImgContainer>
      <img src={image} alt="buffet" />;
    </BackgroundImgContainer>
  );
};

export default BackgroundImg;
