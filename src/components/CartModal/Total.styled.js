import styled from "styled-components";

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
    font: inherit;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }
`;

export const OrderButton = styled.button`
  background-color: #8a2b06;
  color: white;
`;
export const CloseButton = styled.button`
  background-color: transparent;

  color: #8a2b06;
`;

export default Total;
