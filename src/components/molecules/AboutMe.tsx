import Text from "../atoms/Text";

const years = new Date().getFullYear() - 2022;

export default function AboutMe() {
  return (
    <Text margin="3rem 1.8rem">
      <Text size="2.4dvw" color="emerald">
        Olá
      </Text>
      , sou programador há {years} anos, desenvolvendo sites institucionáis e
      sistemas para empresas de pequeno e médio porte.
      <br /> Meu objetivo é aumentar o valor dessas empresas melhorando sua
      imagem e presença digital.
    </Text>
  );
}
