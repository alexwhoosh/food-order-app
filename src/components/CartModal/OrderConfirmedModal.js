import ReactDOM from "react-dom";

import { CartModalContainer } from "./CartModal.styled";
import { ImgContainer, Button } from "./Cart.styled";
import { Backdrop } from "./CartModal.styled";

const OrderConfirmedModal = ({ onClose, modalStatus }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onClick={() => onClose({ type: "modal-closed" })}
          modalStatus={modalStatus}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <CartModalContainer>
          <h2>Thank you for your order!</h2>
          <ImgContainer></ImgContainer>
          <span>You'll receive a notification when it's ready.</span>
          <div>
            <Button onClick={() => onClose({ type: "modal-closed" })}>
              OK
            </Button>
          </div>
        </CartModalContainer>,
        document.getElementById("confirm-modal-root")
      )}
    </>
  );
};

export default OrderConfirmedModal;
