import type { ReactNode } from "react";
import Text from "../atoms/Text";
import Container from "../atoms/Container";
import styled from "styled-components";
import Subtitle from "../atoms/SubTitle";
import FloatingContainer from "../atoms/FloatingContainer";
import Icon from "../atoms/Icon";
import fullscreen from "/src/assets/icons/fullscreen.svg";
import link from "/src/assets/icons/link.svg";
import { Theme } from "../../Theme";
import Link from "../atoms/Link";

const ProjectPreview = styled.img`
  display: flex;
  height: 100%;
  border: none;
  object-fit: contain;
`;
export default function ProjectDetails({
  children,
  image,
  title,
  text,
  isForDevs,
  id,
  onClick,
  projectLink,
}: {
  children?: ReactNode; // unicamente para receber os incon da stack
  image: string;
  title: string;
  text: string;
  isForDevs?: boolean;
  id: string;
  onClick?: (e: any) => void;
  projectLink?: string;
}) {
  return (
    <Container
      id={id}
      direction="row"
      content={isForDevs ? "end" : "start"}
      gap="1.5rem"
      w="100%"
      h="100%"
    >
      <Container direction="row" h="max(10rem, calc(16vw - 0.1rem))" relative>
        {!isForDevs && (
          <FloatingContainer
            direction="row"
            right="1rem"
            top="0.5rem"
            gap="1rem"
          >
            <Link target="_blank" href={projectLink}>
              <Icon
                style={{
                  cursor: "pointer",
                }}
                color={Theme.emerald}
                size="2.5rem"
                src={link}
              />
            </Link>
            <Icon
              onClick={onClick}
              style={{
                cursor: "pointer",
              }}
              color={Theme.emerald}
              size="2.5rem"
              src={fullscreen}
            />
          </FloatingContainer>
        )}
        <ProjectPreview src={image} />
      </Container>
      <Container
        style={{ order: isForDevs ? "-1" : "" }}
        direction="column"
        gap="1rem"
        w="max(20rem, 60%)"
      >
        <Subtitle style={{ textAlign: isForDevs ? "end" : "start" }}>
          {title}
        </Subtitle>
        <Text align={isForDevs ? "right" : "left"}>{text}</Text>
        {isForDevs && (
          <Container direction="row" gap="0.8rem" content="end" items="center">
            <Text>Stack:</Text>
            {children}
          </Container>
        )}
      </Container>
    </Container>
  );
}
