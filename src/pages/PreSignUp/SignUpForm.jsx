import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "../../styles/sign-up.styles";
import masks from "../../utils/masks";

const SignUpForm = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [loading, setLoading] = useState("");

  function handleSuccess(response) {
    setLoading(false);
    setUser(response.data);
    history.push("/choose-ticket");
  }

  function handleFail(e) {
    setLoading(false);
    if (e.response.status === 422) {
      alert("Preencha os campos corretamente");
    } else if (e.response.status === 409) {
      alert("E-mail já está em uso");
    } else {
      alert("Erro ao cadastrar");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const body = {
      email,
      cpf,
      pwd,
      confirmPwd,
    };

    const request = axios.post(
      "https://api-camps-party-qqrcoisa.herokuapp.com/user/pre-register",
      body
    );

    request.then(handleSuccess).catch(handleFail);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        backgroundColor="transparent"
      />
      <Input
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(masks(e.target.value, "cpf"))}
        backgroundColor="transparent"
      />
      <Input
        placeholder="senha"
        value={pwd}
        type="password"
        onChange={(e) => setPwd(e.target.value)}
        backgroundColor="transparent"
      />
      <Input
        placeholder="confirmação de senha"
        value={confirmPwd}
        type="password"
        onChange={(e) => setConfirmPwd(e.target.value)}
        backgroundColor="transparent"
      />
      <Button type="submit" label="Escolher meu ingresso" loading={loading} />
    </Form>
  );
};
export default SignUpForm;
