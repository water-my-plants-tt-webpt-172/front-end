import React, { useState } from "react";
import { LoginForm, FormInput, FormButton,FormHeading } from "./styledcomp";
import { userLogin } from '../api/actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";


const Login = (props) => {
  // setting our form's inital values to be empty
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
  
    const onInputChange = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
    };

    const history = useHistory();

    const formSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      props.userLogin(user);
      if(localStorage.getItem('token') !== null){
        history.push('/plants')
      }
    };

    const success = props.success;

    return (
      <LoginForm>
        <FormHeading>Login</FormHeading>
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
        <FormButton onClick={formSubmit}>Login</FormButton>
        {success === 'Login Successful' ? <p className="Success">Successful</p> : <p></p>}
      </LoginForm>
    );
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

const mapDispatchToProps = {userLogin};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default function Login(props) {
//   const { values, submit, errors } = props;

//   const onSubmit = (event) => {
//     event.preventDefault();
//     submit();
//   };

//   // const onChange = event => {
//   //     const { name, value, type } = event.target
//   //     const usedValue = type === 'checkbox' ? checked: value
//   //     change(name, usedValue)
//   // }

//   return (
//     <form onSubmit={onSubmit}>
//       <div className="form-inputs">
//           <input
//             name="username"
//             type="text"
//             placeholder='Username'
//             value={values.username}
//             onChange={onChange}
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder='Password'
//             value={values.password}
//             onChange={onChange}
//           />
//       </div>
//       <div className="errors">
//         <div>{errors.username}</div>
//         <div>{errors.email}</div>
//         <div>{errors.password}</div>
//       </div>
//       {/* <button id="submitBtn" disabled={disabled}>
//         Log In
//       </button> */}
//     </form>
//   );
// }
