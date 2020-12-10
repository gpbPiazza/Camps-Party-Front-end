import styled from "styled-components";

export const Container = styled.button`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `46px`};

  max-width: 300px;

  border-radius: 0.2rem;
  background-color: var(--color-primary);

  cursor: pointer;

  margin: 20px.3rem 0;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-light);
  line-height: 1.5rem;
`;
