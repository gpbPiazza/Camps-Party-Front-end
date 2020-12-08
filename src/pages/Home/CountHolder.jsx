import React from "react";
import { Container, Title, SubTitle } from "../../styles/countHolder.styles";

const CountHolder = ({ count, name }) => (
  <Container>
    <Title>{count}</Title>
    <SubTitle>{name}</SubTitle>
  </Container>
);

export default CountHolder;
