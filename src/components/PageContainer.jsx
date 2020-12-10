import React from "react";
import MainContainer, {
  Container,
  LogoContainer,
} from "../styles/container.styles";
import Logo from "./Logo";

const PageContainer = ({ children }) => (
  <MainContainer>
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {children}
    </Container>
  </MainContainer>
);

export default PageContainer;
