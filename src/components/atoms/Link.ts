import styled from "styled-components";
import { Theme } from "../../Theme";

const Link = styled.a`
  display: inline;
  color: ${Theme.fg};

  &:hover {
    color: ${Theme.emeraldLight};
  }
`;

export default Link