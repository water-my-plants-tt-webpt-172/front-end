import React from "react";
import Signup from "./signup";
import Login from "./login";
import { FormPage,FormDiv, FormDivider,Title } from "./styledcomp";

function SignLogin() {
  return (
    <FormPage>
      <Title>Water My <br/> Plants</Title>
      <FormDiv>
        <Login />
        <FormDivider></FormDivider>
        <Signup />
      </FormDiv>
    </FormPage>
  );
}

export default SignLogin;
