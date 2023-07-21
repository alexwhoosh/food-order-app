import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-right: 1rem;
  }
  & input {
    width: 2.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;

export default Container;
