import styled from "styled-components";
import { Theme } from "../../Theme";

const Helper = styled.div`
  width: 12dvw;
  height: 12dvw;

  border-radius: 50%;
  border: none;
  background-color: ${Theme.emerald};

  position: absolute;
  bottom: 99.5%;
  right: 0.4%;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 2dvw;
    background-color: transparent;
    border: solid clamp(0.3rem, 0.9dvw, 0.8rem) ${Theme.emerald};
    width: 40dvw;
    height: 16dvw;
  }
`;

export default Helper