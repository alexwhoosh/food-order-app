import styled from "styled-components";

export const Button = styled.button`
  font: inherit;
  border: 1px solid #8a2b06;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 1rem;
  margin: 0.25rem;
`;

export const ImgContainer = styled.div`
  width: 100%;
  margin: auto;

  & img {
    height: 12rem;
    object-fit: cover;
  }
`;

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

export default EmptyCartContainer;
