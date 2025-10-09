import styled from "styled-components";

const Container = styled.div<{
  direction: "row" | "column";
  width?: string;
  height?: string;
  items?: "center" | "start" | "end";
  content?: "center" | "start" | "end" | "space-between" | "space-around";
  gap?: string;
  margin?: string;
  relative?: boolean;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ content }) => content};
  align-items: ${({ items }) => items};
  gap: ${({ gap }) => gap};

  margin: ${({ margin }) => margin};
  position: ${({ relative }) => (relative ? "relative" : "static")};
`;

export default Container;
