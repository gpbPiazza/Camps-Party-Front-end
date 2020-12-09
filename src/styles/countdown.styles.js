import styled from "styled-components";

const Container = styled.div`
  text-align: center;

  @media (min-width: 40em) {
    & {
      display: flex;
    }
    & > :first-child {
      margin-right: 2rem;
    }
  }
`;
const TimeContainer = styled.div`
  text-align: center;
  margin: 1rem 0;
  display: flex;

  & > * + * {
    margin-left: 2rem;
  }

  @media (min-width: 40rem) {
    & {
      margin: 0;
    }
  }
`;

export { Container, TimeContainer };
