import React from "react";
import Signup from "./signup";
import Login from "./login";
import { FormDivider } from "./styledcomp";

function SignLogin() {
  return (
    <div>
      <p>Sign Up/Login</p>
      <Login />
      <FormDivider></FormDivider>
      <Signup />
    </div>
  );
}

export default SignLogin;
