import React, { useState } from "react";
import AddPlant from "./addplant";
// import { usersPlants } from "./plantgallery";


const usersPlants = [
    { id: 1, nickname: "Pearly", species: "curio" },
    { id: 2, nickname: "Grumpy", species: "cactus" },
    { id: 3, nickname: "Spike", species: "air" }
  ];

const Modal = (props) => {
  const { toggle } = props;

  const editPlant = () => {
    console.log("clicked to edit {plant.nickname}");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close-modal-btn" onClick={toggle}>
            X
          </span>
        </div>
        <AddPlant />
        <form>
          <select value={usersPlants.nickname} onChange={editPlant}>
            {usersPlants.map((plant) => (
              <option value={plant.nickname}>{plant.nickname}</option>
            ))}
          </select>
        </form>
        <div className="modal-content">
          <div className="modal-body"></div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
