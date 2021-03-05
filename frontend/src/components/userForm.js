import React, { useState } from "react";
import * as style from "./styledcomp";
import { userEdit , userLogin } from '../api/actions'
import { connect } from 'react-redux'

const UserForm = (props) => {
  const [user, setUser] = useState({
    // oldPass: "",
    newPass: "",
    veriPass: "",
    phoneNum: "",
  });

  const passSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    if(user.newPass === user.veriPass){
      props.userEdit({password : user.newPass})
      console.log("Pass?")
    }
  };

  const phoneSubmit = (e) => {
    e.preventDefault();
   // props.userLogin({username : localStorage.getItem('username') ,  password : user.oldPass});
      props.userEdit({phone : user.phoneNum})
  };

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <style.FormFlexColumn>
      {/* <style.ModalFormInput
        type="Password"
        name="oldPass"
        placeholder="Enter current password"
        onChange={onInputChange}
      /> */}
      <style.ModalFormInput
        type="Password"
        name="newPass"
        placeholder="Enter new password"
        onChange={onInputChange}
      />
      <style.ModalFormInput
        type="Password"
        name="veriPass"
        placeholder="Verify new password"
        onChange={onInputChange}
      />
      <style.FormButton onClick={passSubmit}>Change Password</style.FormButton>
      <style.ModalFormInput type="tel" name="phoneNum" placeholder={props.user.phone} onChange={onInputChange}/>
      <style.FormButton onClick={phoneSubmit}>Change Phone Number</style.FormButton>
    </style.FormFlexColumn>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    success: state.success,
    madeChange: state.madeChange,
    user: state.user
  };
};

const mapDispatchToProps = { userEdit , userLogin };

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

