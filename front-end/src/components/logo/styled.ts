import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100vh;
  width: 20vw;
  position: absolute;
  background-color: #0f2435;
  display: none;

  h1 {
    color: #fff;
    transform: rotate(-90deg);

    font-family: Poppins;
    font-size: 4vw;
    font-weight: bold;
  }

  @media screen and (min-width: 457px) {
    width: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
