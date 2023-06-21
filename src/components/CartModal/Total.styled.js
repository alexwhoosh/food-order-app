import styled from "styled-components";
import { Button } from "./Cart.styled";

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;

  & span {
    font-size: 1.6rem;
  }
`;

export const ButtonContainer = styled.div`
  text-align: right;

  & button {
    border-radius: 20px;

    padding: 0.5rem 2rem;
    font-size: 1.1rem;
  }
`;

export const OrderButton = styled(Button)`
  background-color: #8a2b06;
  color: white;

  &:hover,
  &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;
export const CloseButton = styled(Button)`
  color: #8a2b06;
  background-color: transparent;
  &:hover,
  &:active {
    background-color: #ffebe6;
    border-color: #641e03;
  }
`;

export default Total;
