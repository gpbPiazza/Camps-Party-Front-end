import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "../../styles/sign-up.styles";
import masks from "../../utils/masks";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [loading, setLoading] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const user = {
      email,
      cpf,
      pwd,
      confirmPwd,
    };
    console.log(user);
    setLoading(false);
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
      <Button type="submit" label="enviar" loading={loading} />
    </Form>
  );
};
export default SignUpForm;
