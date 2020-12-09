import React from "react";

import { Container, Text } from "../styles/button.styles";
import Spinner from "./Spinner";

function Button({ disabled, label, onClick, loading, width, height }) {
  return (
    <Container
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
    >
      {loading ? <Spinner /> : <Text>{label}</Text>}
    </Container>
  );
}

export default Button;
