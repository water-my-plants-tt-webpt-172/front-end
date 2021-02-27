import React from "react";
import Signup from "./signup";
import Login from "./login";
import { FormPage,FormDiv, FormDivider } from "./styledcomp";

function SignLogin() {
  return (
    <FormPage>
      <FormDiv>
        <Login />
        <FormDivider></FormDivider>
        <Signup />
      </FormDiv>
    </FormPage>
  );
}

export default SignLogin;
