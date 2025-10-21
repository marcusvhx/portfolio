import styled from "styled-components";

/**
 * gap - string
 */
const Section = styled.section<{
  gap?: string;
}>`
  width: 100%;
  height: calc(100dvh - 5rem);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};
  position:relative;
`;

export default Section;
