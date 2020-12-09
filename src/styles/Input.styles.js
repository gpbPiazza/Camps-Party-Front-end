import styled from "styled-components";

export const ContentInput = styled.input`
  width: ${(props) => (props.width ? props.width : `90%`)};
  max-width: 300px;

  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `var(--color-light)`};
  border-bottom: ${(props) =>
    props.error
      ? `4px solid var(--color-red)`
      : `4px solid var(--color-primary)`};

  font-size: 1rem;
  line-height: 1.2rem;

  padding: 0.8rem 1rem;
  color: var(--color-primary);
`;

export const Container = styled.div``;
