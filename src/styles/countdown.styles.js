import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;

  @media (min-width: 40em) {
    & {
      display: flex;
    }

    & > * + * {
      margin-left: 2rem;
    }
  }
`;

export default Container;
