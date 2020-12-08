import React from "react";
import Countdown from "./Countdown";
import Button from "../../components/Button";
import MainContainer from "../../styles/container.styles";
import Logo from "./Logo";

const Home = () => (
  <MainContainer>
    <Logo />
    <Countdown />
    <Button content="Inscrever-se" />
  </MainContainer>
);

export default Home;
