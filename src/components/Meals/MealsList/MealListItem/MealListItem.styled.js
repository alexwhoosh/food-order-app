import styled from "styled-components";

const ItemContainer = styled.div`
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;

  & h3 {
    margin: 0.5rem 0;
  }

  & span {
    font-style: italic;
  }
`;

export const PriceContainer = styled.div`
  margin-top: 0.5rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;

export const AmountContainer = styled.div`
  text-align: right;
`;

export default ItemContainer;
