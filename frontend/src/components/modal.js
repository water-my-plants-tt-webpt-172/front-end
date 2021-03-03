import React, { useState } from "react";
import AddPlant from "./addplant";
import * as style from "./styledcomp";

// import { usersPlants } from "./plantgallery";

// const usersPlants = [
//     { id: 1, nickname: "Pearly", species: "curio" },
//     { id: 2, nickname: "Grumpy", species: "cactus" },
//     { id: 3, nickname: "Spike", species: "air" }
//   ];

const Modal = ({ showModal, setShowModal }) => {
  
  return (
    <>
      {/* if show modal is true then display modal div otherwise it's set to null */}
      {/* we also need to pass in state { showModal, setShowModal } */}
      {showModal ? (
        <style.Background>
          <style.ModalWrapper showModal={showModal}>
            {/* <ModalImg
                src={require("../img/waves-moonlight.jpg")}
                alt="modal image"
              /> */}
            <style.ModalContent>
              <style.ModalForm>
                <style.ModalInput></style.ModalInput>
                <style.ModalInput></style.ModalInput>
                <style.ModalInput></style.ModalInput>
              </style.ModalForm>
            </style.ModalContent>
            <style.ModalContent>
              {/* <p>The deep ocean floor.</p>
                <p>Lights up from the octopus.</p>
                <p> But his ink blends in.</p>
                <button>Submit</button> */}
              <style.ModalForm>
                <style.ModalInput></style.ModalInput>
                <style.ModalInput></style.ModalInput>
                <style.ModalInput></style.ModalInput>
              </style.ModalForm>
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
