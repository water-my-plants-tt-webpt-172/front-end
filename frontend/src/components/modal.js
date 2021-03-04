import React, { useState } from "react";
import AddPlant from "./addplant";
import * as style from "./styledcomp";
import AddEditPlant from "./addeditplant";
import UserForm from "./userForm";

// import { usersPlants } from "./plantgallery";

// const usersPlants = [
//     { id: 1, nickname: "Pearly", species: "curio" },
//     { id: 2, nickname: "Grumpy", species: "cactus" },
//     { id: 3, nickname: "Spike", species: "air" }
//   ];

const Modal = (props) => {
  const { showModal, setShowModal, plants } = props;

  return (
    <>
      {/* if show modal is true then display modal div otherwise it's set to null */}
      {/* we also need to pass in state { showModal, setShowModal } */}
      {showModal ? (
        <style.Background>
          <style.ModalWrapper showModal={showModal}>
            <style.ModalContent>
              <AddEditPlant plants={plants} />
            </style.ModalContent>
            <style.ModalContent>
              <UserForm />
            </style.ModalContent>
            <style.CloseModalButton
              aria-label="Close Modal"
              // this onClick will toggle the opposite of setShowModal
              onClick={() => setShowModal(!showModal)}
            />
          </style.ModalWrapper>
        </style.Background>
      ) : null}
    </>
  );
};

export default Modal;
