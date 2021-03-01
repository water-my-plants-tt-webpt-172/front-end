import React, { useState } from "react";
import { SignupForm, FormInput, FormButton, FormHeading } from "./styledcomp";
import { userSignUp } from '../api/actions'
import { connect } from 'react-redux'



const Signup = (props) => {
  // setting our form's inital values to be empty
const [user, setUser] = useState({
        username: "",
        password: "",
        phone: ""
    })
  
    const onInputChange = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
    };

  const formSubmit = (e) => {
      e.preventDefault();
      props.userSignUp(user);
    };

    const success = props.success;
    
    return (
      <SignupForm>
        <FormHeading>Create an Account</FormHeading>
        <FormInput
          type="text"
          name="username"
          placeholder="Username"
          onChange={onInputChange}
          maxLength="30"
        />
        <FormInput
          type="Password"
          name="password"
          placeholder="Password"
          onChange={onInputChange}
        />
        <FormInput
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={onInputChange}
          maxLength="15"
        />
        <FormButton onClick={formSubmit}>Sign Up</FormButton>
        {success === 'User Registered' ? <p className="Success">Successful</p> : <p></p>}
      </SignupForm>
    );
  }

const mapStateToProps = (state) => {
  return {
    isLoading: state.user,
    user: state.user,
    error: state.error,
    success: state.success
  }
}

const mapDispatchToProps = {userSignUp};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
