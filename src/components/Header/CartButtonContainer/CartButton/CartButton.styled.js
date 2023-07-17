import styled, { keyframes } from "styled-components";
import Button from "../../../UI/Button.styled";

const bumpAnimation = keyframes`
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
`;

const CartButton = styled(Button)`
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  align-items: center;

  &.bump {
    animation: ${bumpAnimation} 400ms ease-out;
  }
`;

export default CartButton;
