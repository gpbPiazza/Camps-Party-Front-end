import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
import UserContext from "../../contexts/UserContext";
import PageContainer from "../../components/PageContainer";
import {
  Container,
  TicketButton,
  Text,
  TextContainer,
} from "../../styles/tickets.styles";

const Hotel = () => {
  //   const history = useHistory();
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  //   function handleSuccess() {
  //     console.log("foi");
  //     setLoading(false);
  //     history.push("/login");
  //   }
  //   console.log(user);
  //   function handleFail() {
  //     setLoading(false);
  //     console.log("nao foi");
  //   }
  function chooseHotel(hotelName) {
    if (loading) return;
    setLoading(true);
    const body = {
      hotelName,
      id: user.id,
    };
    console.log(body);

    // const request = axios.post(
    //   "https://api-camps-party-qqrcoisa.herokuapp.com/user/ticket",
    //   body
    // );
    // request.then(handleSuccess).catch(handleFail);
  }

  return (
    <PageContainer>
      <TextContainer>
        <Text>Escolha seu hotel</Text>
      </TextContainer>
      <Container>
        <TicketButton onClick={() => chooseHotel("la_residence")}>
          La Residence Paulista
        </TicketButton>
        <TicketButton onClick={() => chooseHotel("dan_inn")}>
          Dan Inn Planalto São Paulo
        </TicketButton>
        <TicketButton onClick={() => chooseHotel("intercity")}>
          Intercity São Paulo Ibirapuera
        </TicketButton>
        <TicketButton onClick={() => chooseHotel("blue_tree")}>
          Blue Tree Premium
        </TicketButton>
        <TicketButton onClick={() => chooseHotel("quality")}>
          Quality Faria Lima
        </TicketButton>
      </Container>
    </PageContainer>
  );
};

export default Hotel;
