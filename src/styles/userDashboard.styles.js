import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 8rem;
  width: 90%;
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;

    & > a {
      display: flex;
      align-items: center;
      padding: 0 1rem;
      text-decoration: none;
      color: var(--color-primary);

      & > * {
        margin: 0 0.5rem;
      }
    }
  }
  @media (max-width: 39.9em) {
    top: 6rem;

    & > div {
      width: 100%;

      & > a {
        flex-direction: column;
        width: 4rem;
        padding: 0 0.5rem;
        & > p {
          margin: 0;
          font-size: 0.6rem;
          font-weight: bold;
        }
      }
    }
  }
`;

export const iconStyle = {
  fontSize: "1.5rem",
  color: "var(--color-primary)",
};
