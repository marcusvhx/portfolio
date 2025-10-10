import { useState } from "react";

import Container from "../atoms/Container";
import Title from "../atoms/Title";
import ProjectButton from "../atoms/Button";

import InlineSVG from "react-inlinesvg";

import landingPage from "/src/assets/icons/landing-page.svg";
import webSystem from "/src/assets/icons/web-system.svg";
import saas from "/src/assets/icons/saas.svg";

const btnIcons = [landingPage, webSystem, saas];

export default function SelectionPanel() {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(0);

  return (
    <Container margin="3rem 0 0 0" direction="column" items="center">
      <Title>Meus Trabalhos</Title>
      <Container direction="row" gap="6dvw" margin="2rem 0">
        {btnIcons.map((iconSrc, idx) => (
          <ProjectButton
            isOn={selectedProjectId === idx}
            key={`key${idx}`}
            onClick={() => setSelectedProjectId(idx)}
          >
            <div />
            <InlineSVG src={iconSrc} />
          </ProjectButton>
        ))}
      </Container>
    </Container>
  );
}
