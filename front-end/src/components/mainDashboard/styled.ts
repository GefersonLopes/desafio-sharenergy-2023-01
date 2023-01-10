import styled from 'styled-components';

export const MainDashboard = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5%;

  @media screen and (min-width: 768px) {
    height: 80vh;
    width: 85vw;
  }

  aside {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0f2435;
    width: 30%;
    height: 100%;
    border-radius: 5% 0 0 5%;

    div {
      position: absolute;
      top: 0;

      width: 100%;
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1.8px solid #000;

      span {
        position: absolute;
        top: 0;
        left: 1vw;
        display: flex;
        align-items: center;
        color: #fff;
        gap: 0.5vw;
        @media screen and (min-width: 768px) {
          font-size: 1.5vw;
        }

        svg {
          width: 5vw;
          height: 5vh;
        }
      }

      h1 {
        color: #fff;
        font-size: 0.9rem;
        font-family: 'poppins';
        font-weight: 600;

        @media screen and (min-width: 768px) {
          font-size: 2.5vw;
        }
      }
    }

    ul {
      width: 100%;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        width: 100%;
        height: 40%;
        @media screen and (min-width: 768px) {
          height: 35%;
          margin-top: 0.4rem;
        }

        button {
          border: none;
          width: 100%;
          height: 100%;
          background-color: transparent;
          cursor: pointer;

          &:hover {
            background-color: #4b9ddf;
          }

          h3 {
            color: #fff;
            font-size: 0.6rem;
            font-family: 'poppins';
            font-weight: 600;

            @media screen and (min-width: 768px) {
              font-size: 1.5vw;
            }
          }
        }
      }
    }
  }
`;
