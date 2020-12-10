import React from "react";
import MainContainer from "../../styles/container.styles";
import { Container, Title, LogoContainer } from "../../styles/sign-up.styles";
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
      <LogInForm />
    </Container>
  </MainContainer>
);
export default LogIn;
