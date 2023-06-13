import { CartModalContainer } from "./CartModal.styled";
import { ImgContainer, Button } from "./Cart.styled";

const OrderConfirmedModal = ({ onClick }) => {
  return (
    <CartModalContainer>
      <h2>Thank you for your order!</h2>
      <ImgContainer></ImgContainer>
      <span>You'll receive a notification when it's ready.</span>
      <div>
        <Button onClick={onClick}>OK</Button>
      </div>
    </CartModalContainer>
  );
};

export default OrderConfirmedModal;
