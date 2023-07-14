import { ImgContainer } from "../Cart/Cart.styled";
import image from "../img/order-confirmed.png";
import { ConfirmButton } from "../../UI/Button.styled";
import { ModalContainer } from "../Modal.styled";
import { MessageContainer } from "../Cart/Cart.styled";

const ConfirmationMessage = ({ onClose }) => {
  return (
    <ModalContainer>
      <MessageContainer>
        <h2>Thank you for your order!</h2>
        <ImgContainer>
          <img src={image} alt="order confirmed" />
        </ImgContainer>
        <span>You'll receive a notification when it's ready.</span>
        <div>
          <ConfirmButton onClick={() => onClose({ type: "modal-closed" })}>
            OK
          </ConfirmButton>
        </div>
      </MessageContainer>
    </ModalContainer>
  );
};

export default ConfirmationMessage;
