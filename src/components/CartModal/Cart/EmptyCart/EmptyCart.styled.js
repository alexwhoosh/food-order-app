import styled from "styled-components";

const EmptyCartContainer = styled.div`
  font: inherit;
  flex-direction: column;
  align-content: space-evenly;
  text-align: center;
  padding: 1rem 0;

  & h2 {
    margin: 0.5rem 0 1rem;
    font-size: 1.75rem;
  }

  & span {
    font-size: 1rem;
  }
`;

export default EmptyCartContainer;
