import { ImgContainer, Button } from "./Cart.styled";
import image from "./img/order-confirmed.png";
import ConfirmationMessageContainer from "./ConfirmationMessage.styled";

const ConfirmationMessage = ({ onClose }) => {
  return (
    <ConfirmationMessageContainer>
      <h2>Thank you for your order!</h2>
      <ImgContainer>
        <img src={image} alt="order confirmed" />
      </ImgContainer>
      <span>You'll receive a notification when it's ready.</span>
      <div>
        <Button onClick={() => onClose({ type: "modal-closed" })}>OK</Button>
      </div>
    </ConfirmationMessageContainer>
  );
};

export default ConfirmationMessage;
