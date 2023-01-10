import styled from 'styled-components';

export const Input = styled.input`
  width: 90%;
  height: 6vh;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: #fff;
  @media screen and (min-width: 768px) {
    height: 8vh;
    width: 25vw;
    font-size: 1.5vw;
  }
  &::placeholder {
    color: #b5b5b5;
    padding-left: 10px;
    font-family: Poppins;
    font-weight: 200;
  }
`;

export const InputMedium = styled.input`
  width: 43%;
  height: 6vh;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  border: none;

  @media screen and (min-width: 768px) {
    height: 8vh;
    width: 12vw;
    font-size: 1.5vw;
  }
  &::placeholder {
    color: #b5b5b5;
    padding-left: 10px;
    font-family: Poppins;
    font-weight: 200;
  }
`;
