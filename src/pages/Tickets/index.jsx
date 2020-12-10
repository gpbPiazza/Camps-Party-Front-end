import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import MainContainer from "../../styles/container.styles";
import {
  Container,
  LogoContainer,
  TicketButton,
  Text,
} from "../../styles/tickets.styles";
import Logo from "../../components/Logo";

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
    <MainContainer>
      <Container>
        <LogoContainer>
          <Logo background="black" height="3rem" />
        </LogoContainer>
        <Text>Escolha seu ingresso</Text>
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
      </Container>
    </MainContainer>
  );
};

export default Tickets;
