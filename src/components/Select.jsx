import React from "react";

import { Container } from "../styles/select.styles";

function Select({ width }) {
  return (
    <Container width={width}>
      <option value="value1" selected>
        Genêro
      </option>
      <option value="value2">Feminino</option>
      <option value="value3">Masculino</option>
      <option value="value3">Prefiro não informar</option>
    </Container>
  );
}

export default Select;
