import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "../../styles/sign-up.styles";

const SignUpForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [loading, setLoading] = useState("");

  function handleSuccess() {
    setLoading(false);
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

    const request = axios.post("http://localhost:4000/user/pre-register", body);

    request.then(handleSuccess).catch(handleFail);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <Input
        placeholder="senha"
        value={pwd}
        type="password"
        onChange={(e) => setPwd(e.target.value)}
      />
      <Input
        placeholder="confirmação de senha"
        value={confirmPwd}
        type="password"
        onChange={(e) => setConfirmPwd(e.target.value)}
      />
      <Button type="submit" label="Escolher meu ingresso" loading={loading} />
    </Form>
  );
};
export default SignUpForm;
