import styled from "styled-components";

export const PersonalInfoBox = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 4rem 4rem 2rem;
  & > div,
  select {
    width: 100%;
  }

  @media (max-width: 39.9rem) {
    & {
      margin: 2rem 0 0 0;
      width: 100%;
    }
  }
`;

export const AddressBox = styled(PersonalInfoBox)``;

export const Title = styled.h3`
  color: var(--color-primary);
  font-size: 1.3rem;
  line-height: 1.8rem;

  @media (max-width: 39.9em) {
  }
`;

export const TextError = styled.p`
  color: var(--color-red);
  font-size: 1.3rem;
  line-height: 1.8rem;
  text-align: center;
`;

export const Form = styled.form`
  & > div {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 39.9em) {
    & {
      margin-top: 4.5rem;
    }
    & > div {
      display: block;
    }
    & > button {
      width: 95%;
      height: 3rem;
      margin-bottom: 1rem;
    }
  }
`;
