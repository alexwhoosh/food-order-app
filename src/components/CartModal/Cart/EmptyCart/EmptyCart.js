import React from "react";
import EmptyCartContainer from "./EmptyCart.styled";
import { ConfirmButton } from "../../../UI/Button.styled";
import image from "../../img/empty.png";
import { ModalContainer } from "../../Modal.styled";
import { ImgContainer } from "../Cart.styled";

const EmptyCart = ({ onClick }) => {
  return (
    <ModalContainer>
      <EmptyCartContainer>
        <h2>Your cart is empty</h2>
        <ImgContainer>
          <img src={image} alt="empty cart" />
        </ImgContainer>

        <span>Looks like you haven't ordered anything yet</span>
        <div>
          <ConfirmButton onClick={() => onClick("modal-closed")}>
            OK
          </ConfirmButton>
        </div>
      </EmptyCartContainer>
    </ModalContainer>
  );
};

export default EmptyCart;
