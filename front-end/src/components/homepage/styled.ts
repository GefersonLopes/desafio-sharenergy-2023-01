import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h1 {
    color: #fff;
    font-size: 1.2rem;
    font-family: 'poppins';
    font-weight: 600;
    box-shadow: 100px 10px 100px 1px black;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    @media screen and (min-width: 768px) {
      font-size: 2vw;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 484px) {
      flex-direction: row;
      gap: 5vw;
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    gap: 3vw;
  }
`;

export const SectionDown = styled.section`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    height: 23rem;
    width: 17rem;
    background-color: rgba(0, 0, 0, 0.6);
    border: 5px solid grey;
    margin: 0 auto;
    margin-top: 3rem;
    @media screen and (min-width: 768px) {
      height: 85vh;
      width: 40vw;
    }
    ul {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 0 auto;
      gap: 1rem;

      #profile {
        width: 11rem;
        height: 11rem;
        margin-top: 1rem;
        border-radius: 50%;
        border: 5px solid #fff;
        @media screen and (min-width: 768px) {
          width: 25vw;
          height: 40vh;
        }
      }

      h3 {
        font-size: 1.3rem;
        font-family: poppins;
        font-weight: 600;
        @media screen and (min-width: 768px) {
          font-size: 2.8vw;
        }
      }

      p {
        color: #d9d9d9;
        @media screen and (min-width: 768px) {
          font-size: 2vw;
        }
      }

      a {
        color: #fff;
        text-decoration: none;
        display: flex;
        gap: 0.5rem;
        @media screen and (min-width: 768px) {
          font-size: 2vw;
        }

        svg {
          color: red;
        }
      }
    }
  }
`;
