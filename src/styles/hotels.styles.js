import styled from "styled-components";
import { TicketButton } from "./tickets.styles";

export const HotelButton = styled(TicketButton)`
  width: 20rem;
  margin: 0.5rem 0;
  @media (max-width: 39.9em) {
    width: 95%;
    padding: 1rem 0.5rem;
  }
`;

export const TextContainer = styled.div`
  margin-top: 5rem;
  @media (max-width: 39.9em) {
    margin-top: 8rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 0.2rem;
  margin: 2rem 0;

  @media (max-width: 39.9em) {
    margin: 0;
  }
`;
