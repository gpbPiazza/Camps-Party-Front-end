import styled from "styled-components";

export const TextContainer = styled.div`
  margin-top: 5rem;
  @media (max-width: 39.9em) {
    margin-top: 8rem;
  }
`;

export const Text = styled.p`
  font-size: 1.15rem;
  color: var(--color-primary);
  line-height: 1.5rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    text-align: start;
    width: 36rem;
    margin-top: 1.5rem;

    & > p {
      font-weight: normal;
      color: var(--color-primary);
    }
  }

  @media (max-width: 39.9rem) {
    & > div {
      width: 90%;
    }
  }
`;
