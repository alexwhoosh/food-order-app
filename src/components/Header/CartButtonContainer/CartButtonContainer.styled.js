import styled from "styled-components";

import Badge from "./CartButton/Badge.styled";
import CartButton from "./CartButton/CartButton.styled";

const Container = styled.div`
  &:hover ${CartButton} {
    background-color: #3e100a;
  }

  &:hover ${Badge} {
    background-color: #842e0c;
  }
`;

export default Container;
