import React from "react";

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
      <form>
        <label>
          username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
            maxLength="30"
          />
        </label>
        <label>
          phone:
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
            maxLength="15"
          />
        </label>
        <label>
          password:
          <input
            type="tel"
            name="phone"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </label>
      </form>
    );
  }
}

export default Signup;
