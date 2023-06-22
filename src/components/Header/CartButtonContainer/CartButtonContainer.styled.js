import styled from "styled-components";

import Badge from "./Badge.styled";
import CartButton from "./CartButton.styled";

const Container = styled.div`
  &:hover,
  &:active {
    ${CartButton} {
      background-color: #2c0d00;
    }

    ${Badge} {
      background-color: #92320c;
    }
  }
`;

export default Container;
