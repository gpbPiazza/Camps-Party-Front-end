import React from "react";
import MainContainer from "../../styles/container.styles";
import { Container, Title, LogoContainer } from "../../styles/sign-up.styles";
import SignUpForm from "./SignUpForm";
import Logo from "../../components/Logo";
import Text from "./Text";

const PreSignUp = () => (
  <MainContainer>
    <Container>
      <Title>
        <LogoContainer>
          <Logo background="black" height="3rem" />
        </LogoContainer>
        <Text />
      </Title>
      <SignUpForm />
    </Container>
  </MainContainer>
);
export default PreSignUp;
