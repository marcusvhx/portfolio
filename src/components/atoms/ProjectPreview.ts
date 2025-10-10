import styled from "styled-components";

const ProjectPreview = styled.div<{ mobileSrc: string; desktopSrc: string }>`
  @media (min-width: 45rem) {
    background-image: url(${({ desktopSrc }) => desktopSrc});
  }

  background-image: url(${({ mobileSrc }) => mobileSrc});
  background-size: cover;
  background-position: top;

  min-width: 40dvw;
  height: 100%;
  border-radius: 5dvw;
  background-color: #ddd;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.5;
    border-radius: 1dvw;
  }
`;

export default ProjectPreview;
