import styled from "styled-components";
import Button from "../../../../UI/Button.styled";

export const CartItemsList = styled.ul`
  margin: 0 1rem;
  padding-left: 0;
`;

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0 0;
`;

export const MealDetails = styled.div`
  & h3 {
    margin: 0 0 0.5rem 0;
    color: black;
    font-size: 1.3rem;
  }
`;

export const Summary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-weight: bold;
  color: #8a2b06;
`;

export const Amount = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
`;

export const CustomButton = styled(Button)`
  color: #8a2b06;
  width: 3rem;
  border-radius: 6px;
  background-color: transparent;
  margin: 0 0 0 0.5rem;
  font-size: 1.25rem;
  padding: 0.25rem 1rem;

  &:hover,
  &:active {
    background-color: #8a2b06;
    color: white;
  }
`;

export default ItemContainer;
