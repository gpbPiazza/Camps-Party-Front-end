import React from "react";

import { ContentInput, Container } from "../styles/Input.styles";

export default function Input({
  value,
  type,
  placeholder,
  onChange,
  onFocus,
  error,
  width,
  onBlur,
  backgroundColor,
}) {
  return (
    <Container>
      <ContentInput
        onBlur={onBlur}
        backgroundColor={backgroundColor}
        width={width}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        error={error}
      />
    </Container>
  );
}
