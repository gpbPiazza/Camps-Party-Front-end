import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Button from "../../components/Button";
import { TextError, Form } from "../../styles/completeSignUpForm";
import signUpCompleted from "../../services/User.services";
import PersonalInfo from "./PersonalInfo";
import AdressInfo from "./AdressInfo";

const CompleteSignUpForm = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [fullName, setFullName] = useState("");
  const [CEP, setCEP] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [numberCellPhone, setNumberCellPhone] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      full_name: fullName,
      cep: CEP,
      address: `${city}, ${neighborhood}, ${street}, ${number}`,
      uf: state,
      number_cell_phone: numberCellPhone,
      gender,
    };
    setLoading(true);
    const data = await signUpCompleted(body, user.token);
    if (data.success) {
      history.push("./choose-ticket");
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
      <div>
        <PersonalInfo
          fullName={fullName}
          setFullName={setFullName}
          gender={gender}
          setGender={setGender}
          numberCellPhone={numberCellPhone}
          setNumberCellPhone={setNumberCellPhone}
        />
        <AdressInfo
          CEP={CEP}
          setCEP={setCEP}
          city={city}
          setCity={setCity}
          neighborhood={neighborhood}
          setNeighborhood={setNeighborhood}
          state={state}
          setState={setState}
          street={street}
          setStreet={setStreet}
          number={number}
          setNumber={setNumber}
        />
      </div>
      <Button
        disabled={loading}
        type="submit"
        label="Escolher Ingresso"
        loading={loading}
        height="4rem"
      />
      {error && <TextError>{errorMessage}</TextError>}
    </Form>
  );
};
export default CompleteSignUpForm;

// {
//   userId: 1,
//   token: token,
//   tipoTicket: hotel
// }
