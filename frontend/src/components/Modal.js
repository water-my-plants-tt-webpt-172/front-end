import React, { useState } from "react";

const Modal = (props) => {
  const [openAddPlant, setOpenAddPlant] = useState(false);

  const toggleHandler = () => {
    const toggle = openAddPlant;
    setOpenAddPlant({openAddPlant : !toggle})
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close-modal-btn" onClick={toggleHandler}>{'\u002B'}</span>
        </div>
        <div className="modal-content">
          <div className="modal-body"></div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
