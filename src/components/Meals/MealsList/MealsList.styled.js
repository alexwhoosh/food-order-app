import styled, { keyframes } from "styled-components";

const mealsAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ListContainer = styled.div`
  max-width: 60rem;
  width: 95%;
  margin: 2rem auto;
  animation: ${mealsAppear} 1s ease-out forwards;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default ListContainer;
