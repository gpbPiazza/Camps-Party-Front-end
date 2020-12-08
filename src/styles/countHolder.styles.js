import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 40rem) {
    padding: 1rem;
    width: 10rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;

  @media (min-width: 40rem) {
    & {
      font-size: 6rem;
    }
  }
`;

const SubTitle = styled.p`
  font-weight: normal;
`;

export { Container, Title, SubTitle };
