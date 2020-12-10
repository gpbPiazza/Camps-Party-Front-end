import styled from "styled-components";

export const TicketButton = styled.button`
  margin-top: 30px;
  width: 250px;
  height: 150px;
  border-radius: 10px;
  background-color: var(--color-primary);
  align-self: center;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.2rem;
  background-color: var(--color-light);

  cursor: pointer;

  margin: 0.3rem 0;
`;

export const Text = styled.p`
  margin-top: 200px;
  font-size: 1.15rem;
  color: var(--color-primary);
  line-height: 1.5rem;
`;

export const Title = styled.div`
  margin-bottom: 20px;
`;

export const TextContainer = styled.div`
  margin-top: 100px;
`;

export const LogoContainer = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 1.5rem 0 0 0;

  @media (max-width: 39.9em) {
    & {
      padding: 1rem 0;
      display: flex;
      align-items: center;
    }

    & > img {
      height: 3rem;
      margin: 0 0.5rem 0 1rem;
    }

    & > h2 {
      margin: 0 0.5rem 0 0;
      font-size: 1.2rem;
    }
  }
`;
