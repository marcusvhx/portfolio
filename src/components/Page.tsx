import HomeSection from "./organism/Home";
import AboutMe from "./molecules/AboutMe";
import JobsSection from "./organism/Jobs";
import Container from "./atoms/Container";
import Footer from "./atoms/Footer";
import Text from "./atoms/Text";
import Link from "./atoms/Link";

function App() {
  return (
    <Container direction="column" width="100%">
      <HomeSection />
      <AboutMe />
      <JobsSection />
      <Footer>
        <Text>
          Código por{" "}
          <Link href="https://instagram.com/marcus.xavier.dev" target="_blank">
            Marcus Xavier
          </Link>
        </Text>
        <Text>
          Design por Marcus Xavier &{" "}
          <Link href="https://instagram.com/Hiru_Ice" target="_blank">
            Annalyce Marques
          </Link>
        </Text>
        <Text>&copy; todos os direitos reservados.</Text>
      </Footer>
    </Container>
  );
}

export default App;
