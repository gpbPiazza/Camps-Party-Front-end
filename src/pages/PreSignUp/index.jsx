import React, { useState } from "react";
import MainContainer from "../../styles/container.styles";
import {
  Container,
  Text,
  Title,
  Form,
  LogoContainer,
  TextContainer,
} from "../../styles/sign-up.styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

const PreSignUp = () => {
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [confirmPwd, setConfirmPwd] = useState(null);
  const [loading, setLoading] = useState(false);
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
    <MainContainer>
      <Container>
        <Title>
          <LogoContainer>
            <Logo background="black" height="3rem" />
          </LogoContainer>
          <TextContainer>
            <Text>Bem vindo a Camps Party</Text>
            <Text>Essa é a sua pré-inscrição</Text>
            <Text>Ao preenche-la sua vaga já está garantida</Text>
            <Text>
              Mas não esqueça de preencher o restante da sua inscrição!
            </Text>
          </TextContainer>
        </Title>
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
          <Button type="submit" label="enviar" loading={loading} />
        </Form>
      </Container>
    </MainContainer>
  );
};
export default PreSignUp;
