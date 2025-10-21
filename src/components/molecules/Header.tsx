import styled from "styled-components";
import Container from "../atoms/Container";
import Link from "../atoms/Link";
import Icon from "../atoms/Icon";

import logo from "../../assets/icons/MX-logo.svg"

/**
* tag de cabeçalho estilizado
*/
const THeader = styled.header`
  height: 5rem;
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding:0 1rem;
`;

export default function Header() {
  return <THeader>
    <Icon src={logo} color="" size="4rem" />
    <Container direction="row" gap="3rem">
        <Link href="#home">Home</Link>
        <Link href="#aboute-me">Sobre Mim</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#contact">Contato</Link>
    </Container>
  </THeader>;
}
