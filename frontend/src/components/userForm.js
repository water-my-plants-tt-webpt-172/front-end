import React, { useState } from "react";
import * as style from "./styledcomp";

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
    <style.FormFlexColumn>
      <style.ModalFormInput
        type="Password"
        name="Old Password"
        placeholder="Enter current password"
      />
      <style.ModalFormInput
        type="Password"
        name="New Password"
        placeholder="Enter new password"
      />
      <style.ModalFormInput
        type="Password"
        name="Verify Password"
        placeholder="Verify new password"
      />
      <style.FormButton onClick={passSubmit}>Change Password</style.FormButton>
      <style.ModalFormInput type="tel" name="Phone Number" placeholder={props.phone} />
      <style.FormButton onClick={phoneSubmit}>Change Phone Number</style.FormButton>
    </style.FormFlexColumn>
  );
};

export default UserForm;
