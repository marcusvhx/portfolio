import { useState } from "react";

import Container from "../atoms/Container";
import Title from "../atoms/Title";
import JobButton from "../atoms/Button";

import InlineSVG from "react-inlinesvg";

const btnIcons = [
  "src/assets/icons/landing-page.svg",
  "src/assets/icons/web-system.svg",
  "src/assets/icons/saas.svg",
];

export default function SelectionPanel({}) {
  const [selectedJobId, setSelectedJobId] = useState<number>(0);

  return (
    <Container margin="3rem 0 0 0" direction="column" items="center">
      <Title>Meus Trabalhos</Title>
      <Container direction="row" gap="6dvw" margin="2rem 0">
        {btnIcons.map((iconSrc, idx) => (
          <JobButton
            isOn={selectedJobId === idx}
            key={iconSrc}
            onClick={() => setSelectedJobId(idx)}
          >
            <div />
            <InlineSVG src={iconSrc} />
          </JobButton>
        ))}
      </Container>
    </Container>
  );
}
