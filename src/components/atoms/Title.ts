import styled from "styled-components";

const Title = styled.h1`
  @media (max-resolution: 1.6dppx) {
    font-size: clamp(4rem, 5dvw + 1rem, 5rem);
  }

  font-size: clamp(2.6rem, 6dvw + 1rem, 5.6rem);
  line-height:1.1;
`;
export default Title