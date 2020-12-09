import React from "react";
import Countdown from "./Countdown";
import MainContainer from "../../styles/container.styles";
import Logo from "./Logo";

const Home = () => (
  <MainContainer>
    <Logo />
    <Countdown />
  </MainContainer>
);

export default Home;
