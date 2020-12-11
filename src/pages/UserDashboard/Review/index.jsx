import React, { useContext, useState, useEffect } from "react";
import { TextContainer, Container, Text } from "../../../styles/review.styles";
import Ticket from "../../../services/Activities.services";
import UserContext from "../../../contexts/UserContext";
import UserDashboardContainer from "../Container";

const Review = () => {
  const { user } = useContext(UserContext);
  const [ticket, setTicket] = useState("");

  const getTicket = async () => {
    const data = await Ticket(user.token);
    if (data.success) {
      setTicket(data.success.ticket_type);
    } else {
      setTicket("");
    }
  };

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <UserDashboardContainer>
      <TextContainer>
        <Text>Seu Resumo</Text>
      </TextContainer>
      <Container>
        <div>
          <p>
            <strong>Datas: </strong>22, 23 e 24 de janeiro de 2021
          </p>
          <p>
            <strong>Endereço: </strong>R. Dr. Plínio Barreto, 285 - Bela Vista,
            São Paulo - SP, 01313-020
          </p>
        </div>
        <div>
          <p>
            <strong>Nome: </strong>
            {user.full_name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong>CPF: </strong>
            {user.cpf}
          </p>
          <p>
            <strong>Tipo de Ingresso: </strong>
            {ticket}
          </p>
        </div>
        <div>
          <p>
            <strong>Status da Inscrição: </strong>
          </p>
        </div>
      </Container>
    </UserDashboardContainer>
  );
};
export default Review;
