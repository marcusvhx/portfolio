import styled from "styled-components";
import Container from "./Container";

const FloatingContainer = styled(Container)<{
  top?: string;
  bottom?: string;
  left: string;
}>`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
`;

export default FloatingContainer;
