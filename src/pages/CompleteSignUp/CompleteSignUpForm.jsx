import React, { useState, useContext } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "../../styles/sign-up.styles";
import masks from "../../utils/masks";
import Select from "../../components/Select";
import UserContext from "../../contexts/UserContext";
import {
  PersonalInfoBox,
  AddressBox,
  Title,
} from "../../styles/completeSignUpForm";
import signUpCompleted from "../../services/User.services";

const CompleteSignUpForm = () => {
  const { user } = useContext(UserContext);
  const [fullName, setFullName] = useState("");
  const [CEP, setCEP] = useState("");
  const [city, setCity] = useState("");
  const [neiborhood, setNeiborhood] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [numberCellPhone, setNumberCellPhone] = useState("");
  // const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      full_name: fullName,
      cep: CEP,
      address: `${city}, ${neiborhood}, ${street}, ${number}`,
      uf: state,
      number_cell_phone: numberCellPhone,
      gender,
    };
    setLoading(true);
    await signUpCompleted(body, user.token);

    setLoading(false);
  }

  return (
    <Form onSubmit={handleSubmit} flexDirection="row">
      <PersonalInfoBox>
        <Title>Contato:</Title>
        <Input
          type="text"
          placeholder="Nome inteiro"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="tel"
          placeholder="Tele fone celular"
          value={numberCellPhone}
          onChange={(e) => setNumberCellPhone(masks(e.target.value, "tel"))}
        />
        <Select
          onChange={(e) => setGender(e.currentTarget.value)}
          options={[
            { label: "Genêro", value: "Genêro" },
            { label: "Feminino", value: "Feminino" },
            { label: "Masculino", value: "Masculino" },
            { label: "Prefiro não informar", value: "Prefiro não informar" },
          ]}
        />
      </PersonalInfoBox>
      <AddressBox>
        <Title>Endereço:</Title>
        <Input
          type="numeric"
          placeholder="CEP"
          value={CEP}
          onChange={(e) => setCEP(masks(e.target.value, "cep"))}
        />
        <Input
          type="text"
          maxlength="2"
          placeholder="Estado (uf)"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Bairro"
          value={neiborhood}
          onChange={(e) => setNeiborhood(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Rua"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <Input
          type="numeric"
          placeholder="Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </AddressBox>
      <Button
        type="submit"
        label="Concluir cadastro"
        loading={loading}
        height="30%"
      />
    </Form>
  );
};
export default CompleteSignUpForm;

// {
//   userId: 1,
//   token: token,
//   tipoTicket: hotel
// }
