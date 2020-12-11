import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
import UserContext from "../../contexts/UserContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "../../styles/sign-up.styles";

const EditPasswordForm = () => {
  // const history = useHistory();
  const { user } = useContext(UserContext);
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [loading, setLoading] = useState("");

  // function handleSuccess() {
  //   setLoading(false);
  //   history.push("/dashboard");
  // }

  // function handleFail(e) {
  //   setLoading(false);
  //   if (e.response.status === 422) {
  //     alert("Preencha os campos corretamente");
  //   } else if (e.response.status === 409) {
  //     alert("E-mail já está em uso");
  //   } else {
  //     alert("Erro ao cadastrar");
  //   }
  // }

  console.log(user);
  function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const body = {
      userId: user.id,
      password: pwd,
      confirmPassword: confirmPwd,
    };

    console.log(body);

    // const request = axios.post(
    //   "https://api-camps-party-qqrcoisa.herokuapp.com/user/pre-register",
    //   body,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${user.token}`,
    //     },
    //   }
    // );

    // request.then(handleSuccess).catch(handleFail);
  }
  return (
    <Form onSubmit={handleSubmit}>
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
export default EditPasswordForm;
