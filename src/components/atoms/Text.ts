import styled from "styled-components";
import { Theme, type tColor } from "../../Theme";

const Text = styled.p<{
  size?: string;
  color?: tColor;
  align?: string;
  margin?: string;
}>`
  font-size: 1.2rem;
  display: inline;
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || "right"};
  color: ${({ color }) => Theme[color || "fg"]};
`;

export default Text;
