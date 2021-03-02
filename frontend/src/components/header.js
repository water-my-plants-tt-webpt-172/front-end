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

  return (
    <div className="App">
        <style.Container>
          <h1>Plant Gallery</h1>
          <style.Button onClick={openModal}>Add / Edit</style.Button>
          <Modal
            plants={plants}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </style.Container>
        <style.LineBreak/>
    </div>
  );
};

export default Header;
