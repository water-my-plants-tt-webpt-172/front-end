import React from "react";
import Signup from "./signup";
import Login from "./login";
import { FormPage,FormDiv, FormDivider } from "./styledcomp";
import * as style from "./styledcomp";

function SignLogin() {
  return (
    <div>
      <style.Title>Water My Plants</style.Title>
    <FormPage>
      <FormDiv>
        <Login />
        <FormDivider></FormDivider>
        <Signup />
      </FormDiv>
    </FormPage>
    </div>
  );
}

export default SignLogin;
