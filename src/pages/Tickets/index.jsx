import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import PageContainer from "../../components/PageContainer";
import {
  Container,
  TicketButton,
  Text,
  TextContainer,
} from "../../styles/tickets.styles";

const Tickets = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  function handleSuccess() {
    setLoading(false);
    history.push("/login");
  }

  function handleFail() {
    setLoading(false);
  }

  function chooseTicket(typeOfTicket) {
    if (loading) return;
    setLoading(true);
    const body = {
      typeOfTicket,
      id: user.id,
    };

    const request = axios.post(
      "https://api-camps-party-qqrcoisa.herokuapp.com/event/ticket",
      body
    );
    request.then(handleSuccess).catch(handleFail);
  }

  return (
    <PageContainer>
      <TextContainer>
        <Text>Escolha seu ingresso</Text>
        <Text>para completar sua pré-inscrição</Text>
      </TextContainer>
      <Container>
        <TicketButton onClick={() => chooseTicket("ticket")}>
          Sem hospedagem
        </TicketButton>
        <TicketButton onClick={() => chooseTicket("camp")}>
          Acampamento
        </TicketButton>
        <TicketButton onClick={() => chooseTicket("hotel")}>
          Hotel parceiro
        </TicketButton>
      </Container>
    </PageContainer>
  );
};

export default Tickets;
