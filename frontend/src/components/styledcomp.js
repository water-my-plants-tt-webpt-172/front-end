import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

export const FormDivider = styled.span`
  border: 1px solid #333;
  margin-left: 3rem;
`;

export const FormDiv = styled.div`
  display: flex;
`;

export const FormPage = styled.div`
  background-color: #49fcd4;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const SignupForm = styled.form`
  display: flex;
  margin-left: 3rem;
  flex-direction: column;
  background-color: rgba(68, 68, 68, 0.8);
  border-radius: 0.4rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(68, 68, 68, 0.8);
  border-radius: 0.4rem;
`;

export const FormInput = styled.input`
  margin: 0.8rem;
  padding: 0.4rem;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #0e2923;
    box-shadow: 0px 0px 2px;
  }
`;

export const FormButton = styled.button`
  display: block;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 2rem;
  width: 70%;
  margin: 0.9rem auto;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #333;
  color: #fff;
`;

export const FormHeading = styled.h3`
  color: #fff;
  letter-spacing: 1px;
`;

export const Container = styled.div`
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsIcon = styled(FiSettings)`
  font-size: 2.5rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const LineBreak = styled.hr`
  border: 1px solid #333;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 850px;
  height: 550px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  top: 0;
  right: 0;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: contain;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalInput = styled.input`
  margin-bottom: 1.5rem;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Body = styled.div`
  margin: 0 auto;
  max-width: 75%;
`;

export const PlantContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

// Plant Card ============

export const Card = styled.div`
  border: 1px solid #333;
  border-radius: 20px;
  margin-top: 3rem;
`;

export const CardImg = styled.img`
  width: 100%;
  object-fit: contain;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const P = styled.p`
  font-size: 1.2rem;
`;

export const WaterReset = styled.button`
  width: 7rem;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  outline: none;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const FormFlexColumn = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 70%;
  padding: 1rem;
  border-radius: 10px;
`;

export const ModalFormInput = styled.input`
  margin: 0.7rem auto;
  width: 68%;
`;

export const ModalFormSelect = styled.select`
  margin: 0.7rem auto;
  width: 68%;
`;

export const ModalFormOption = styled.option`
  width: 80%;
`;

export const InputButton = styled.input`
  display: block;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 2rem;
  width: 70%;
  margin: 0.9rem auto;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #333;
  color: #fff;
`;

export const WaterFormLabel = styled.label`
  font-size: 0.9rem;
`;

export const LogOutBtn = styled.button`
  display: block;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #49fcd4;
  color: #333;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  text-align: center;

  &:hover {
    background: #333;
    color: #49fcd4;
  }
`;

export const ModalUser = styled.div`
  display: block;
  margin-top: 1rem;
  margin-left: 2rem;
  text-align: left;
  text-decoration: underline;

  position: absolute;
  top: 0;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const WateringIndicator = styled.hr`
  width: 70%;
  margin: 0.7rem auto;
  border: 2px solid black;
`;

export const Footer = styled.footer`
  padding: 5rem;
  background-color: #49fcd4;
  max-width: 100vw;
  margin-top: 5rem;
`;

export const HtmlBody = styled.div`
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: auto;
`;
