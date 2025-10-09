import styled from "styled-components";
import Container from "./Container";

const FloatingContainer = styled(Container)<{ top: string; left: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export default FloatingContainer