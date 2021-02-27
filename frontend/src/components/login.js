import React from "react";
import { LoginForm, FormInput, FormButton,FormHeading } from "./styledcomp";
import { userLogin } from '../api/actions'
import { connect } from 'react-redux'


class Login extends React.Component {
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
      this.props.userLogin(this.state);
    };

    const success = this.props.success;
    return (
      <LoginForm>
        <FormHeading>Login</FormHeading>
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
        <FormButton onClick={formSubmit}>Login</FormButton>
        {success ? <p className="Success">Successful</p> : <p></p>}
      </LoginForm>
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
