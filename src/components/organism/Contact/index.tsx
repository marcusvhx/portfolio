import styled from "styled-components";
import Container from "../../atoms/Container";
import Section from "../../templates/Section";
import { Theme } from "../../../Theme";
import Icon from "../../atoms/Icon";
import whatsapp from "/src/assets/icons/whatsapp.svg";
import corner from "/src/assets/icons/contact-corner.svg";
import type { FormEvent } from "react";
import Title from "../../atoms/Title";

const Form = styled.form`
  width: min(90dvw, 35rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  border: ${Theme.emerald} solid 0.3rem;
  border-radius: 1rem;

  padding: 1rem;
`;

const Input = styled.input<{ h: string }>`
  width: 100%;
  min-height: ${({ h }) => h};
  background-color: ${Theme.fg};
  color: #000;
  padding-left: 0.5rem;
  font-size: 1.2rem;

  border-radius: 0.6rem;
  border: none;
  text-align: start;
  outline: none;

  &:focus {
    outline: ${Theme.emeraldLight} 0.3rem solid;
  }
`;

const TextArea = styled.textarea`
  &:focus {
    outline: ${Theme.emeraldLight} 0.3rem solid;
  }

  max-width: 100%;
  width: 100%;

  height: 15rem;

  border-radius: 0.6rem;
  padding: 0.5rem;

  resize: none;

  background-color: ${Theme.fg};
  color: #000;
`;

const Label = styled.label`
  font-size: 1.3rem;
  margin-left: 0.3rem;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-size: 1.2rem;
  width: min(22rem, 100%);
  height: 3rem;
  background-color: ${Theme.emerald};
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: ${Theme.emeraldDark};
    cursor: pointer;
  }
`;

export default function Contact({}: {}) {
  const submit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const name = document.getElementById("IName") as HTMLInputElement;
    const subject = document.getElementById("ISubject") as HTMLInputElement;
    window.open(
      `https://wa.me/+5581984483883?text=${encodeURIComponent(
        `Olá Marcus, meu nome é ${name.value}.\n ${subject.value}`
      )}`,
      "_blank"
    );
  };

  return (
    <Section gap="2rem" id="contact" content="center">
      <Icon
        style={{ position: "absolute", top: 0, right: 0 }}
        color={Theme.emerald}
        size="max(30rem, 20dvw)"
        src={corner}
      />
      <Icon
        style={{ position: "absolute", bottom: 0, left: 0,rotate:"180deg" }}
        color={Theme.emerald}
        size="max(30rem, 20dvw)"
        src={corner}
      />
        <Title>Vamos conversar?</Title>
      <Form>
        <Container w="100%" direction="column" items="start" gap="0.5rem">
          <Label htmlFor="IName">Nome</Label>
          <Input id="IName" h="3rem" type="text" placeholder="Seu Nome" />
        </Container>

        <Container w="100%" direction="column" items="start" gap="0.5rem">
          <Label htmlFor="ISubject">Me conte como eu posso te ajudar</Label>
          <TextArea
            id="ISubject"
            placeholder="Ex.: Eu preciso de uma forma de receber os pedidos dos meus clientes mais barata que o ifood"
          />
        </Container>
        <SubmitButton type="submit" onClick={(e) => submit(e)}>
          <Icon color="#fff" size="2rem" src={whatsapp} />
          Enviar mensagem pelo whatsapp
        </SubmitButton>
      </Form>
    </Section>
  );
}
