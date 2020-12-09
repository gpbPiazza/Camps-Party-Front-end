import styled from "styled-components";

export const PersonalInfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddressBox = styled(PersonalInfoBox)``;

export const Title = styled.h3`
  color: var(--color-primary);
  font-size: 1.3rem;
  line-height: 1.8rem;

  text-align: center;

  @media (max-width: 39.9em) {
  }
`;
