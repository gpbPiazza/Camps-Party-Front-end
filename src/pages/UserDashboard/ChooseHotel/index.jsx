import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../contexts/UserContext";
import { Text } from "../../../styles/tickets.styles";
import {
  TextContainer,
  HotelButton,
  Container,
} from "../../../styles/hotels.styles";
import UserDashboardContainer from "../Container";

const Hotel = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  function handleSuccess() {
    setLoading(false);
    history.push("/dashboard");
  }

  function handleFail() {
    setLoading(false);
  }

  function chooseHotel(hotelName) {
    if (loading) return;
    setLoading(true);
    const body = {
      hotelName,
      id: user.id,
    };

const request = axios.post(
      "https://api-camps-party-qqrcoisa.herokuapp.com/event/hotel/name",
      body,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    request.then(handleSuccess).catch(handleFail);
  }

  return (
    <UserDashboardContainer>
      <TextContainer>
        <Text>Escolha seu hotel</Text>
      </TextContainer>
      <Container>
        <HotelButton onClick={() => chooseHotel("la_residence")}>
          La Residence Paulista
        </HotelButton>
        <HotelButton onClick={() => chooseHotel("dan_inn")}>
          Dan Inn Planalto São Paulo
        </HotelButton>
        <HotelButton onClick={() => chooseHotel("intercity")}>
          Intercity São Paulo Ibirapuera
        </HotelButton>
        <HotelButton onClick={() => chooseHotel("blue_tree")}>
          Blue Tree Premium
        </HotelButton>
        <HotelButton onClick={() => chooseHotel("quality")}>
          Quality Faria Lima
        </HotelButton>
      </Container>
    </UserDashboardContainer>
  );
};

export default Hotel;
