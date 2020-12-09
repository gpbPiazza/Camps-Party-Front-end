import React from "react";

import { Container } from "../styles/select.styles";

function Select({ width, options }) {
  return (
    <Container width={width} required>
      {options.map((option) => (
        <option>{option.text}</option>
      ))}
    </Container>
  );
}

export default Select;
