import React from "react";
import { SignupForm, FormDiv } from "./styledcomp";

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
      <FormDiv>
        <SignupForm>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
            maxLength="30"
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={this.state.phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
            maxLength="15"
          />
        </SignupForm>
      </FormDiv>
    );
  }
}

export default Signup;
