/* eslint-disable react/destructuring-assignment */
import React from "react";
import masks from "../../utils/masks";
import Select from "../../components/Select";
import { PersonalInfoBox, Title } from "../../styles/completeSignUpForm";
import Input from "../../components/Input";

const PersonalInfo = (props) => (
  <PersonalInfoBox>
    <Title>Contato</Title>
    <Input
      type="text"
      placeholder="Nome inteiro"
      value={props.fullName}
      onChange={(e) => props.setFullName(e.target.value)}
      backgroundColor="transparent"
    />
    <Input
      type="tel"
      placeholder="Tele fone celular"
      value={props.numberCellPhone}
      onChange={(e) => props.setNumberCellPhone(masks(e.target.value, "tel"))}
      backgroundColor="transparent"
    />
    <Select
      onChange={(e) => props.setGender(e.currentTarget.value)}
      options={[
        { label: "Genêro", value: "Genêro" },
        { label: "Feminino", value: "Feminino" },
        { label: "Masculino", value: "Masculino" },
        { label: "Prefiro não informar", value: "Prefiro não informar" },
      ]}
    />
  </PersonalInfoBox>
);

export default PersonalInfo;
