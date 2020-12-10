import styled from "styled-components";

export const Container = styled.select`
  width: ${(props) => (props.width ? props.width : `80%`)};
  max-width: 270px;

  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `var(--color-primary)`};

  font-size: 1rem;
  line-height: 1.2rem;

  padding: 0.8rem 1rem;
  margin-top: 1rem;
  color: var(--color-light);

  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-light);
  line-height: 1.5rem;
`;
