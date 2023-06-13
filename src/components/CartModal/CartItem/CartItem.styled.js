import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  & h3 {
    margin: 0 0 0.5rem 0;
    color: black;
    font-size: 1.25rem;
  }

  & button {
    font-size: 1.25rem;
    color: #8a2b06;
    width: 3rem;
    background-color: transparent;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #8a2b06;
      color: white;
    }
  }
`;

// export const Button = styled.button`
//   font: inherit;
//   font-weight: bold;
//   font-size: 1.25rem;
//   color: #8a2b06;
//   border: 1px solid #8a2b06;
//   width: 3rem;
//   text-align: center;
//   border-radius: 6px;
//   background-color: transparent;
//   cursor: pointer;
//   margin-left: 1rem;
//   margin: 0.25rem;

//   & :hover,
//   & :active {
//     background-color: #8a2b06;
//     color: white;
//   }
// `;

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

export const MealDetails = styled.div``;
export const ButtonsContainer = styled.div``;

export default ItemContainer;
