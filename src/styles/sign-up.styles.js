import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.15rem;
  color: var(--color-primary);
  line-height: 1.5rem;
`;

export const TextContainer = styled.div`
  @media (max-width: 39.9em) {
    & {
      margin-top: 5.5rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: center;
  margin-top: 2rem;

  & > div {
    width: 300px;
  }

  @media (max-width: 39.9em) {
    & > button {
      width: 95%;
    }
    & {
      margin-top: 1rem;
    }
  }
`;
