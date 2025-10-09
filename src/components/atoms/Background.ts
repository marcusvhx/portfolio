import styled from "styled-components";
import Container from "./Container";

const Background = styled(Container)<{ src: string; bgSize?: string }>`
  line-height: 1.2;

  background-image: url(${({ src }) => src});
  background-size: ${({ bgSize }) => bgSize || "cover"};
  background-repeat: no-repeat;
  background-position: center;
`;

export default Background;
