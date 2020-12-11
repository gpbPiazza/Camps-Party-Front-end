import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, TimeContainer } from "../../styles/countdown.styles";
import { calculateDistance } from "../../utils/utils";
import CountHolder from "./CountHolder";
import Button from "../../components/Button";

const Countdown = () => {
  const [countdown] = useState(new Date("2020-12-11T18:00:00-0300").getTime());
  const [time, setValue] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const history = useHistory();

  const updateCountdown = () => {
    if (countdown) {
      const currentTime = new Date().getTime();
      const timeLeft = countdown - currentTime;
      const { days, hours, minutes, seconds } = calculateDistance(timeLeft);
      setValue({ days, hours, minutes, seconds });
    }
  };

  const isTheEnd = !!(
    time.minutes[1] === "-" &&
    time.minutes[1] === "-" &&
    time.days[1] === "-" &&
    time.hours[1] === "-"
  );
  console.log(time.minutes[1]);

  useEffect(() => {
    const tick = setInterval(() => updateCountdown(), 1000);
    return () => clearInterval(tick);
  });

  if (isTheEnd)
    return (
      <Button
        label="Fazer Pré-inscrição"
        width="15rem"
        height="3rem"
        onClick={() => history.push("./pre-sign-up")}
      />
    );

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
