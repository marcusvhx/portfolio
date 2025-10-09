import InlineSVG from "react-inlinesvg";
import styled from "styled-components";

const Icon = styled(InlineSVG)<{ size: string; color: string }>`
  width: clamp(2rem, calc(${({ size }) => size} + 1rem), 12rem);
  height: clamp(2rem, calc(${({ size }) => size} + 1rem), 12rem);

  & path {
    fill: ${({ color }) => color};
  }
`;
export default Icon;
