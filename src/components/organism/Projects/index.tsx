import Background from "../../atoms/Background";
import Container from "../../atoms/Container";
import SelectionPanel from "../../molecules/SelectionPanel";
import { Theme } from "../../../Theme";
import Icon from "../../atoms/Icon";
import Helper from "../../atoms/Helper";
import pdpMobile from "/src/assets/previews/pais-de-pet-mobile.png";
import pdpDesktop from "/src/assets/previews/pais-de-pet-desktop.png";
import pdpDesktop2 from "/src/assets/previews/pais-de-pet-desktop-2.png";
import pdpMobile2 from "/src/assets/previews/pais-de-pet-mobile-2.png";
import next from "/src/assets/icons/next.svg";
import tailwind from "/src/assets/icons/tailwind.svg";
import lucide from "/src/assets/icons/lucide.svg";
import ProjectDetails from "../../molecules/ProjectDetails";

const texts = {
  pdp: {
    forNormals:
      "A pais de pet é um centro de cuidados para pets. Visando fortalecer a preseça digital da marca, construimos um site com design moderno e amigavel, enfatizano a sua missão.",
    forDevs: "",
  },
};

export default function ProjectsSection() {
  return (
    <Container direction="column" items="center">
      <SelectionPanel />
      <Background
        src={"/backgrounds/projects.svg"}
        bgSize="100% 100%"
        width="98%"
        height={`calc(98vw * 1.0892857142857143)`}
        direction="column"
        margin="20dvw 0 0 0"
        relative
      >
        <Helper />
        <ProjectDetails
          imageDesktop={pdpDesktop}
          imageMobile={pdpMobile}
          left="8.5%"
          top="10.8%"
          text={texts.pdp.forNormals}
        />

        <ProjectDetails
          imageDesktop={pdpDesktop2}
          imageMobile={pdpMobile2}
          left="2.5%"
          top="45.5%"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non dicta repellat cumque deserunt nobis rerum? Sed itaque tempore magnam, fugiat deserunt cupiditate quae quos impedit totam. Obcaecati, nesciunt porro."
          isForDevs
        >
          <Icon title="NextJS" src={next} size="3dvw" color={Theme.emerald} />
          <Icon
            title="TailwindCSS"
            src={tailwind}
            size="4dvw"
            color={Theme.emerald}
          />
          <Icon title="Lucide" src={lucide} size="3dvw" color={Theme.emerald} />
        </ProjectDetails>
      </Background>
    </Container>
  );
}
