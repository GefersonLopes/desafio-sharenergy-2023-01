import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 45vw;
    height: 85vh;
    border-radius: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h3 {
      color: #fff;
      font-size: 1.2rem;
      font-family: 'poppins';
      font-weight: 600;

      @media screen and (min-width: 768px) {
        font-size: 2.5vw;
      }
    }

    p {
      color: #fff;
      font-size: 1rem;
      font-family: 'poppins';
      font-weight: 400;
      @media screen and (min-width: 768px) {
        font-size: 1.5vw;
      }
    }
  }

  .goLogin_Register {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    color: #fff;
    font-size: 1rem;
    font-family: 'poppins';
    font-weight: 400;
    @media screen and (min-width: 768px) {
      font-size: 1.2vw;
    }

    a {
      color: #4b9ddf;
      font-size: 1rem;
      font-family: 'poppins';
      font-weight: 400;
      text-decoration: none;
      @media screen and (min-width: 768px) {
        font-size: 1.2vw;
      }
    }
  }
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  gap: 1rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    margin-top: 6vh;
    margin-bottom: 4vh;
    gap: 3vh;
  }

  label {
    width: 16rem;
    @media screen and (min-width: 768px) {
      width: 30vw;
    }

    input {
      height: 2.6rem;
      width: 100%;
      background-color: #151414;
      border: transparent 1.5px solid;
      color: #b5b5b5;
      @media screen and (min-width: 768px) {
        height: 8vh;
        font-size: 1.5vw;
      }
      &::placeholder {
        color: #b5b5b5;
        padding-left: 10px;
        font-family: Poppins;
        font-weight: 200;
      }
    }
  }

  .errorInput {
    border: 1.5px solid red;
    border-radius: 5px;
  }

  .rootLogin {
    width: 70%;
    color: #4b9ddf;
    font-size: 1rem;
    font-family: 'poppins';
    font-weight: 400;
    text-align: end;
    text-decoration: none;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      font-size: 1.2vw;
    }
  }
`;
