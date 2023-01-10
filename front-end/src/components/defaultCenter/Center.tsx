import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  width: 70%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5vh;
    margin: 0 auto;
    height: 12rem;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
      width: 100%;
      height: 100%;
      margin-top: 0;
      gap: 2vh;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1.5vh;
      margin: 0 auto;
      width: 100%;
      height: 2rem;

      @media screen and (min-width: 768px) {
        margin: 1.5vh auto;
      }
    }
  }
`;
