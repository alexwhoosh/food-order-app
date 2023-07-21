import styled from "styled-components";
import Button from "../../../UI/Button.styled";

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0.5rem 1rem 0;

  & span {
    font-size: 1.6rem;
  }
`;

export const CustomButton = styled(Button).attrs(() => ({
  type: "button",
}))`
  margin: 0 0 0.5rem 0.5rem;
  font-size: 1.2rem;
  font-weight: lighter;
  padding: 0.5rem 1.5rem;

  &.order {
    background-color: #8a2b06;
    color: white;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }

  &.close {
    color: #8a2b06;
    background-color: transparent;
    &:hover,
    &:active {
      background-color: #f6efef;
      border-color: #641e03;
    }
  }
`;

export default Total;
