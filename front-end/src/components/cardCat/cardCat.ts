import styled from 'styled-components';

export const CardImg = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: 2vh;

  img {
    width: 70%;
    height: 30%;

    @media screen and (min-width: 768px) {
      width: 70%;
      height: 70%;
    }
  }

  input {
    height: 2.6rem;
    width: 40%;
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
`;
