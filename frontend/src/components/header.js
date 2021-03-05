import React, { useState } from "react";
import Modal from "./modal";
import * as style from "./styledcomp";

const Header = (props) => {
  //   const [open, setOpen] = useState(false);

  //   const openModal = () => {
  //     setOpen(!open);
  //   };
  const { plants } = props;
  const [showModal, setShowModal] = useState(false);

  //create a open modal toggler function
  const openModal = () => {
    // here we are setting the setShowModal value to the opposite
    setShowModal(!showModal);
  };
  console.log(plants);

  return (
    <div className="App">
      <style.Container>
        <h1>Water My Plants</h1>
        <style.SettingsIcon onClick={openModal} aria-label="Settings Icon" />
        <Modal
          plants={plants}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </style.Container>
      <style.LineBreak />
    </div>
  );
};

export default Header;
