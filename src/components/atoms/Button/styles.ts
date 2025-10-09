import styled from "styled-components";
import { Theme } from "../../../Theme";

export const Button = styled.button<{ is_selected?: boolean }>`
  @media (max-resolution: 1.6dppx) {
    width: clamp(2rem, calc(20dvw + 1rem), 14rem);
    height: clamp(2rem, calc(20dvw + 1rem), 14rem);
    border-width: ${({ is_selected }) =>
      is_selected ? 0 : "clamp(0.3rem, 0.9dvw, 0.6rem)"};
  }
  width: clamp(3rem, calc(16dvw + 1rem), 18rem);
  height: clamp(3rem, calc(16dvw + 1rem), 18rem);

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20%;
  border-color: ${Theme.emerald};
  border-width: ${({ is_selected }) =>
    is_selected ? 0 : "clamp(0.3rem, 0.9dvw, 0.8rem)"};
  border-style: solid;

  cursor: pointer;
  transition: all ease-in-out 0.2s;
  background-color: transparent;

  &:hover {
    scale: ${({ is_selected }) => (!is_selected ? 1.1 : 1)};
  }

  & div {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: ${({ is_selected }) => (is_selected ? 1 : 0)};
    transition: all ease-in-out 0.2s;
    background: linear-gradient(
      135deg,
      ${Theme.emerald},
      ${Theme.emeraldLight},
      ${Theme.emeraldDark}
    );
  }

  & svg {
    width: 85%;
    height: 85%;
  }

  & path {
    fill: ${({ is_selected, color }) =>
      is_selected ? Theme.bg : color || Theme.fg};
  }
`;
