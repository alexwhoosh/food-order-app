import styled from "styled-components";

export const ButtonContainer = styled.div`
  text-align: right;
`;

export const ImgContainer = styled.div`
  width: 100%;
  margin: auto;

  & img {
    height: 12rem;
    object-fit: cover;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  text-align: center;
`;
