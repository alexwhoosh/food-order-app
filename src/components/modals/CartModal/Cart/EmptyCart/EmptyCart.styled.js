import styled from "styled-components";
import { MessageContainer } from "../Cart.styled";

const EmptyCartContainer = styled(MessageContainer)`
  & h2 {
    margin: 1rem 0 1rem;
    font-size: 1.75rem;
  }
`;

export default EmptyCartContainer;
