import styled from "styled-components";

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

// export const SignupForm = styled.form`
//   background-color: blue;
// `;
