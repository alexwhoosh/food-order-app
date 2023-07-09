import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  font-weight: bold;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 25px;

  &:hover,
  &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

export const ConfirmButton = styled(Button)`
  margin-top: 1rem;
  font-weight: lighter;
  padding: 0.5rem 1.5rem;
`;

export default Button;
