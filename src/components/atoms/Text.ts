import styled from "styled-components";
import { Theme, type tColor } from "../../Theme";

const Text = styled.p<{
  size?: string;
  color?: tColor;
  align?: string;
  margin?: string;
}>`
  @media (max-resolution: 1.6dppx) {
    font-size: clamp(
      1.2rem,
      calc(${({ size }) => size || "1dvw"} + 0.8rem),
      2rem
    );
  }
  font-size: clamp(
    1.4rem,
    calc(${({ size }) => size || "1.2dvw"} + 0.8rem),
    2rem
  );
  display: inline;
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align};
  color: ${({ color }) => Theme[color || "fg"]};
`;

export default Text;
