import styled from 'styled-components';

export const UlClients = styled.ul`
  width: 95%;
  height: 70%;
  background: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 3vw;

  @media screen and (min-width: 768px) {
    width: 70%;
    flex-direction: row;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: '2rem';
    height: 75%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5%;

    @media screen and (min-width: 768px) {
      width: 20vw;
      height: 100%;
      margin: 0 auto;
    }

    img {
      width: 55%;
      height: 30%;
      position: absolute;
      top: 2vh;
      border-radius: 50%;

      @media screen and (min-width: 768px) {
        width: 55%;
        height: 30%;
      }
    }

    div {
      margin-top: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 768px) {
        margin-top: 40%;
      }
      p {
        font-size: 0.45rem;
        font-weight: 400;
        color: #fff;
        text-align: center;

        @media screen and (min-width: 768px) {
          font-size: 1vw;
          font-weight: 100;
          margin-top: 0.2rem;
        }
      }
    }
  }
`;
