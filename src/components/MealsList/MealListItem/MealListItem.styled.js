import styled from "styled-components";

const ItemContainer = styled.div`
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;

  & h3 {
    margin: 0 0 0.5rem 0;
  }

  & span {
    font-style: italic;
    margin: 0 0 0.5rem 0;
  }
`;

export default ItemContainer;
