import ReactDOM from "react-dom";

import { Backdrop } from "../Modal.styled";
import ConfirmationMessage from "./ConfirmationMessage";

const OrderConfirmedModal = ({ onClose, modalStatus: { backdrop } }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onClick={() => onClose({ type: "modal-closed" })}
          $modalStatus={backdrop}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ConfirmationMessage onClose={onClose} />,
        document.getElementById("confirm-modal-root")
      )}
    </>
  );
};

export default OrderConfirmedModal;
