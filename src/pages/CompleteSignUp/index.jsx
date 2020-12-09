import React from "react";
import MainContainer from "../../styles/container.styles";
import { Container, Title, LogoContainer } from "../../styles/sign-up.styles";
import CompleteSignUpForm from "./CompleteSignUpForm";
import Logo from "../../components/Logo";

const CompleteSignUp = () => (
  <MainContainer>
    <Container>
      <Title>
        <LogoContainer>
          <Logo background="black" height="3rem" />
        </LogoContainer>
      </Title>
      <CompleteSignUpForm />
    </Container>
  </MainContainer>
);
export default CompleteSignUp;
