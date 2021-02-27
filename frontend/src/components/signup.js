import React from "react";
import { SignupForm, FormInput, FormButton, FormHeading } from "./styledcomp";

// const onSubmit = (event) => {
//   event.preventDefault();
//   onSubmit();
// };

class Signup extends React.Component {
  // setting our form's inital values to be empty
  state = {
    username: "",
    phone: "",
    password: "",
  };

  render() {
    return (
      <SignupForm>
        <FormHeading>Create an Account</FormHeading>
        <FormInput
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
          maxLength="30"
        />
        <FormInput
          type="Password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <FormInput
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={(e) => this.setState({ phone: e.target.value })}
          maxLength="15"
        />
        <FormButton>Sign Up</FormButton>
      </SignupForm>
    );
  }
}

export default Signup;
