import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PageContainer from "../../components/PageContainer";
import {
  Container,
  TicketButton,
  Text,
  TextContainer,
} from "../../styles/tickets.styles";

const Tickets = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  function handleSuccess() {
    console.log("foi");
    setLoading(false);
    history.push("/login");
  }

  function handleFail() {
    setLoading(false);
    console.log("nao foi");
  }
  function chooseTicket(typeOfTicket) {
    if (loading) return;
    setLoading(true);
    const id = 9; //  pegar id do contexto
    const body = {
      typeOfTicket,
      id,
    };

    const request = axios.post("http://localhost:4000/user/ticket", body);
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
