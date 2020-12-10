/* eslint-disable react/destructuring-assignment */
import React from "react";
import { AddressBox, Title } from "../../styles/completeSignUpForm";
import masks from "../../utils/masks";
import Input from "../../components/Input";

const AdressInfo = (props) => (
  <AddressBox>
    <Title>Endereço</Title>
    <Input
      type="numeric"
      placeholder="CEP"
      value={props.CEP}
      onChange={(e) => props.setCEP(masks(e.target.value, "cep"))}
      backgroundColor="transparent"
    />
    <Input
      type="text"
      maxlength="2"
      placeholder="Estado (uf)"
      value={props.state}
      onChange={(e) => props.setState(e.target.value)}
      backgroundColor="transparent"
    />
    <Input
      type="text"
      placeholder="Cidade"
      value={props.city}
      onChange={(e) => props.setCity(e.target.value)}
      backgroundColor="transparent"
    />
    <Input
      type="text"
      placeholder="Bairro"
      value={props.neighborhood}
      onChange={(e) => props.setNeighborhood(e.target.value)}
      backgroundColor="transparent"
    />
    <Input
      type="text"
      placeholder="Rua"
      value={props.street}
      onChange={(e) => props.setStreet(e.target.value)}
      backgroundColor="transparent"
    />
    <Input
      type="numeric"
      placeholder="Número"
      value={props.number}
      onChange={(e) => props.setNumber(e.target.value)}
      backgroundColor="transparent"
    />
  </AddressBox>
);

export default AdressInfo;
