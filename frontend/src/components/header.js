import React, { useState } from "react";
import Modal from "./modal";
import * as style from "./styledcomp";

const Header = () => {
  //   const [open, setOpen] = useState(false);

  //   const openModal = () => {
  //     setOpen(!open);
  //   };

  const [showModal, setShowModal] = useState(false);

  //create a open modal toggler function
  const openModal = () => {
    // here we are setting the setShowModal value to the opposite
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <style.Container>
        <h1>Plant Gallery</h1>
        <style.Button onClick={openModal}>Add / Edit</style.Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </style.Container>
    </div>
  );
};

export default Header;
