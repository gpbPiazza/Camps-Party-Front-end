import React from "react";
import { Container, Content } from "../styles/button.styles";

const Button = ({ content }) => (
  <Container>
    <Content to="/sign-up">{content}</Content>
  </Container>
);

export default Button;
