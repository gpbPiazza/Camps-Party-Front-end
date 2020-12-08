import React, { useState, useEffect } from "react";
import { Container, TimeContainer } from "../../styles/countdown.styles";
import { calculateDistance } from "../../utils/utils";
import CountHolder from "./CountHolder";

const Countdown = () => {
  const [countdown] = useState(new Date("2020-12-11T18:00:00-0300").getTime());
  const [time, setValue] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCountdown = () => {
    if (countdown) {
      const currentTime = new Date().getTime();
      const timeLeft = countdown - currentTime;
      const { days, hours, minutes, seconds } = calculateDistance(timeLeft);
      setValue({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const tick = setInterval(() => updateCountdown(), 1000);
    return () => clearInterval(tick);
  });

  return (
    <Container>
      <CountHolder count={time.days} name="Dias" />
      <TimeContainer>
        <CountHolder count={time.hours} name="Horas" />
        <CountHolder count={time.minutes} name="Minutos" />
        <CountHolder count={time.seconds} name="Segundos" />
      </TimeContainer>
    </Container>
  );
};

export default Countdown;
