import React from "react";
import PageContainer from "../../components/PageContainer";
import { Text, TextContainer } from "../../styles/sign-up.styles";
import LogInForm from "./LogInForm";

const LogIn = () => (
  <PageContainer>
    <TextContainer>
      <Text>Faça seu login para entrar no painel</Text>
    </TextContainer>
    <LogInForm />
  </PageContainer>
);

export default LogIn;
