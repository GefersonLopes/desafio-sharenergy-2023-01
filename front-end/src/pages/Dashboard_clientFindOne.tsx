import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { ButtonHome } from '../components/buttons/button';
import { Client } from '../components/clients/Clients';
import { Center } from '../components/defaultCenter/Center';
import { Input } from '../components/inputs/styled';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { ContextLogic } from '../context/Provider';

export const Dashboard_clientFindOne = () => {
  const { IsToken, loading, isLoad, FindOneClient, DeleteClient } =
    useContext(ContextLogic);
  IsToken();
  setTimeout(() => loading(), 3000);

  return (
    <>
      {isLoad ? (
        <SectionLoad>
          <LottieLoad />
        </SectionLoad>
      ) : (
        <SectionLoad>
          <Main>
            <Center>
              <div>
                <Input type="text" placeholder="Id" />
                <ButtonHome onClick={() => FindOneClient()}>
                  Procurar
                </ButtonHome>
                <ButtonHome onClick={() => DeleteClient()}>Deletar</ButtonHome>
              </div>
              <Client />
            </Center>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
