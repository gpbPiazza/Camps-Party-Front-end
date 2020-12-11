import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
  const [userInfo, setUserInfo] = useState({});
  const [addressParts, setAddressParts] = useState([]);

  function handleUserInfo(response) {
    setUserInfo(response.data);
    setAddressParts(response.data.address.split(","));
  }

  useEffect(() => {
    const request = axios.get(
      "https://api-camps-party-qqrcoisa.herokuapp.com/user/completed-register",
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    request.then(handleUserInfo).catch((e) => console.log(e.status));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const userCity = city || addressParts[0];
    const userNeighborhood = neighborhood || addressParts[1];
    const userStreet = street || addressParts[2];
    const userNumber = number || addressParts[3];

    const body = {
      full_name: fullName || userInfo.full_name,
      cep: CEP || userInfo.cep,
      address: `${userCity}, ${userNeighborhood}, ${userStreet}, ${userNumber}`,
      uf: state || userInfo.uf,
      number_cell_phone: numberCellPhone || userInfo.number_cell_phone,
      gender: gender || userInfo.gender,
    };

    const data = await signUpCompleted(body, user.token);
    if (data.success) {
      history.push("/dashboard");
    } else if (data.response.status !== 200) {
      setError(true);
      setErrorMessage(data.response.data.error);
      setLoading(false);
      return;
    } else {
      setError(true);
      setErrorMessage("Please Check you internet conexation");
      setLoading(false);
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
