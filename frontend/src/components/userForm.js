import React, { useState } from "react";

const UserForm = (props) => {
  const [user, setUser] = useState({
    oldPass: "",
    newPass: "",
    veriPass: "",
    phone: "",
  });

  const passSubmit = (e) => {
    e.preventDefault();
  };

  const phoneSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        type="Password"
        name="Old Password"
        placeholder="Enter current password"
      />
      <input
        type="Password"
        name="New Password"
        placeholder="Enter new password"
      />
      <input
        type="Password"
        name="Verify Password"
        placeholder="Verify new password"
      />
      <button onClick={passSubmit}>Change Password</button>
      <input type="tel" name="Phone Number" placeholder={props.phone} />
      <button onClick={phoneSubmit}>Change Phone Number</button>
    </form>
  );
};

export default UserForm;
