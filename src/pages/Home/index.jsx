import React from "react";
import Countdown from "./Countdown";
import Button from "../../components/Button";
import MainContainer from "../../styles/container.styles";

const Home = () => (
  <MainContainer>
    <Countdown />
    <Button content="Inscrever-se" />
  </MainContainer>
);

export default Home;
