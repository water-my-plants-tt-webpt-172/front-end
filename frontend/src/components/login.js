import React from "react";
import { LoginForm, FormDiv } from "./styledcomp";

class Login extends React.Component {
  // setting our form's inital values to be empty
  state = {
    username: "",
    phone: "",
    password: "",
  };

  render() {
    return (
      <FormDiv>
        <LoginForm>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
            maxLength="30"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </LoginForm>
      </FormDiv>
    );
  }
}

export default Login;

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
