import styled from "styled-components";
import { ModalContainer } from "./Modal.styled";

const ConfirmationMessageContainer = styled(ModalContainer)`
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  text-align: center;

  & button {
    background-color: #8a2b06;
    color: white;
    border-radius: 20px;

    padding: 0.5rem 2rem;
    font-size: 1.1rem;
    margin-top: 1rem;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }
`;

export default ConfirmationMessageContainer;
