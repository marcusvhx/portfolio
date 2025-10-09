import Background from "../../atoms/Background";
import Container from "../../atoms/Container";
import SelectionPanel from "../../molecules/SelectionPanel";
import { Theme } from "../../../Theme";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Helper from "../../atoms/Helper";
import FloatingContainer from "../../atoms/FloatingContainer";
import JobPreview from "../../atoms/JobPreview";

export default function JobsSection({}) {
  return (
    <Container direction="column" items="center">
      <SelectionPanel />
      <Background
        src="src/assets/backgrounds/jobs.svg"
        bgSize="100% 100%"
        width="98%"
        height={`calc(98vw * 1.0892857142857143)`}
        direction="column"
        margin="20dvw 0 0 0"
        relative
      >
        <Helper />
        <FloatingContainer
          left="8.5%"
          top="10.8%"
          direction="row"
          items="center"
          gap="1rem"
          width="88%"
          height="30%"
        >
          <JobPreview
            desktopSrc="src/assets/previews/pais-de-pet-desktop.png"
            mobileSrc="src/assets/previews/pais-de-pet-mobile.png"
          />

          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            sint corrupti expedita nesciunt minus atque, asperiores modi,
            aliquid ilqqlo.
          </Text>
        </FloatingContainer>

        <FloatingContainer
          left="2.5%"
          top="45.5%"
          direction="row"
          items="center"
          gap="1rem"
          width="88%"
          height="30%"
        >
          <Container direction="column" gap="0.5rem" height="fit-content">
            <Text
              style={{
                display: "-webkit-inline-box",
                WebkitLineClamp: 3,
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
              }}
              align="right"
              size="1.2dvw"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati sint corrupti expedita.
            </Text>
            <Container
              direction="row"
              gap="0.8rem"
              content="end"
              items="center"
            >
              <Text>Stack:</Text>
              <Icon
                title="NextJS"
                src="src/assets/icons/next.svg"
                size="3dvw"
                color={Theme.emerald}
              />
              <Icon
                title="TailwindCSS"
                src="src/assets/icons/tailwind.svg"
                size="4dvw"
                color={Theme.emerald}
              />
              <Icon
                title="Lucide"
                src="src/assets/icons/lucide.svg"
                size="3dvw"
                color={Theme.emerald}
              />
            </Container>
          </Container>
          <JobPreview
            desktopSrc="src/assets/previews/pais-de-pet-mobile-2.png"
            mobileSrc="src/assets/previews/pais-de-pet-mobile-2.png"
          />
        </FloatingContainer>
      </Background>
    </Container>
  );
}
