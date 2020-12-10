import React from "react";
import MainContainer from "../../styles/container.styles";
import {
  Container,
  Title,
  LogoContainer,
  Text,
  TextContainer,
} from "../../styles/sign-up.styles";
import LogInForm from "./LogInForm";
import Logo from "../../components/Logo";

const LogIn = () => (
  <MainContainer>
    <Container>
      <Title>
        <LogoContainer>
          <Logo background="black" height="3rem" />
        </LogoContainer>
      </Title>
      <TextContainer>
        <Text>Faça seu login para entrar no painel</Text>
      </TextContainer>
      <LogInForm />
    </Container>
  </MainContainer>
);
export default LogIn;
