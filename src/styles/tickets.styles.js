import styled from "styled-components";

export const TicketButton = styled.button`
  margin-top: 30px;
  border-radius: 10px;
  width: 15rem;
  background-color: var(--color-primary);
  align-self: center;
  font-weight: bold;
  padding: 1rem 2rem;
  margin: 1rem 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 0.2rem;

  cursor: pointer;

  margin: 2rem 0;
`;

export const Text = styled.p`
  font-size: 1.15rem;
  color: var(--color-primary);
  line-height: 1.5rem;
`;

export const Title = styled.div`
  margin-bottom: 20px;
`;

export const TextContainer = styled.div`
  @media (max-width: 39.9em) {
    margin-top: 4rem;
  }
`;
