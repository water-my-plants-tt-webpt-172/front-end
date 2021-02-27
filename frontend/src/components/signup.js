import React from "react";
import { SignupForm, FormInput, FormButton, FormHeading } from "./styledcomp";
import { userSignUp } from '../api/actions'
import { connect } from 'react-redux'




class Signup extends React.Component {
  // setting our form's inital values to be empty
  
  constructor(props){
    super(props);
    this.state = {
        username: "",
        password: "",
        phone: ""
    }
  }
  
  render() {
    const formSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.userSignUp(this.state);
    };
    const success = this.props.success;
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
        <FormButton onClick={formSubmit}>Sign Up</FormButton>
        {success === 'User Registered' ? <p className="Success">Successful</p> : <p></p>}
      </SignupForm>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isLoading: state.user,
    user: state.user,
    error: state.error,
    success: state.success
  }
}

const mapDispatchToProps = {userSignUp};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
