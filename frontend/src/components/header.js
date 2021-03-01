import React, { useState } from "react";
import Modal from "./modal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <h1>Plant Gallery</h1>
      <button onClick={openModal}> Add/Edit </button>
      {open ? <Modal state={open} /> : null}
      <hr />
    </div>
  );
};

export default Header;
