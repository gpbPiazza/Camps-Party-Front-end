import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

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

export const InputDeBounce = styled(DebounceInput)`
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
