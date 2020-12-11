import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Select from "../components/Select";
import UserContext from "../contexts/UserContext";
import Button from "../components/Button";
import ActivitiesCompleted from "../services/Activities.services";

export default function ActivitiesChoices() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [morningFriday, setMorningFriday] = useState("");
  const [afternoonFriday, setAfternoonFriday] = useState("");
  const [eveningfriday, seteveningFriday] = useState("");
  const [morningSaturday, setMorningsaturday] = useState("");
  const [afternoonSaturday, setAfternoonsaturday] = useState("");
  const [eveningSaturday, seteveningsaturday] = useState("");
  const [morningSunday, setMorningSunday] = useState("");
  const [afternoonSunday, seAfternoonSunday] = useState("");
  const [eveningSunday, seteveningSunday] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      morningFriday,
      afternoonFriday,
      eveningfriday,
      morningSaturday,
      afternoonSaturday,
      eveningSaturday,
      morningSunday,
      afternoonSunday,
      eveningSunday,
    };
    setLoading(true);
    const data = await ActivitiesCompleted(body, user.token);
    if (data.success) {
      history.push("vai para próxima tela");
    } else if (data.response.status !== 200) {
      setError(true);
      setErrorMessage(data.response.data.error);
      return;
    } else {
      setError(true);
      setErrorMessage("Please Check you internet conexation");
      return;
    }

    setLoading(false);
  }

  return (
    <Form onSubmit={handleSubmit} flexDirection="row">
      <Container>
        <h1>Escolha de atividades</h1>
        <Days>
          <h1>Sexta-feira</h1>
          <h1>Sábado</h1>
          <h1>Domingo</h1>
        </Days>
        <PrimeiraColuna>
          <h1>Manhã</h1>
          <Select
            onChange={(e) => setMorningFriday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
          <Select
            onChange={(e) => setMorningsaturday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
          <Select
            onChange={(e) => setMorningSunday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
        </PrimeiraColuna>
        <SegundaColuna>
          <h1>Tarde</h1>
          <Select
            onChange={(e) => setAfternoonFriday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
          <Select
            onChange={(e) => setAfternoonsaturday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
          <Select
            onChange={(e) => seAfternoonSunday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
        </SegundaColuna>
        <TerceiraColuna>
          <h1>Noite</h1>
          <Select
            onChange={(e) => seteveningFriday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
          <Select
            onChange={(e) => seteveningsaturday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
          <Select
            onChange={(e) => seteveningSunday(e.currentTarget.value)}
            options={[
              { label: "Gaming", value: "Gaming" },
              { label: "Hacking", value: "Hacking" },
              { label: "Makers", value: "Makers" },
              { label: "Startups", value: "Startups" },
            ]}
          />
        </TerceiraColuna>
        <Button
          disabled={loading}
          type="submit"
          label="Salvar"
          loading={loading}
          height="30%"
        />
        {error && <TextError>{errorMessage}</TextError>}
      </Container>
    </Form>
  );
}

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;

  h1 {
    padding-top: 50px;
    color: black;
    padding-left: 50px;
  }

  h2 {
    padding-top: 120px;
    color: black;
    padding-left: 50px;
  }
`;

const Form = styled.div`
background: var(--color-light);
display: flex;
flex-direction: ${(props) => props.flexDirection || "column"};
align-items: center;
@media (max-width: 39.9em) {
  & > button {
    width: 95%;
  }
  margin-top: 2rem;
  flex-direction: column;
`;

const TextError = styled.p`
  color: var(--color-red);
  font-size: 1.3rem;
  line-height: 1.8rem;
  text-align: center;
`;

const PrimeiraColuna = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around:
`;

const SegundaColuna = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around:

  h1{
    margin-right: 10px;
  }
`;

const TerceiraColuna = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around:
`;

const Days = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center:
`;
