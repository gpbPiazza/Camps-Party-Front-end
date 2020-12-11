import React from "react";
import { Container } from "../styles/select.styles";

function Select({ width, options, onChange, loading, onClick }) {
  return (
    <Container width={width} disabled={loading} required onChange={onChange}>
      {options.map(({ label, value }) => (
        <option key={value} onClick={onClick} value={value}>
          {label}
        </option>
      ))}
    </Container>
  );
}

export default Select;
