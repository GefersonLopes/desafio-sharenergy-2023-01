import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { ButtonHome } from '../components/buttons/button';
import { Center } from '../components/defaultCenter/Center';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { Context } from '../context/Context';
import { ContextLogic } from '../context/Provider';

export const Dashboard_client = () => {
  const { IsToken, loading, isLoad, setClientCreated } =
    useContext(ContextLogic);
  const { navigate } = useContext(Context);
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
                <ButtonHome
                  onClick={() => navigate('/dashboard/client/create')}
                >
                  Criar Cliente
                </ButtonHome>
                <ButtonHome
                  onClick={() => navigate('/dashboard/client/findAll')}
                >
                  Lista de Clientes
                </ButtonHome>
                <ButtonHome
                  onClick={() => {
                    navigate('/dashboard/client/findOne');
                    setClientCreated(undefined);
                  }}
                >
                  Procurar Cliente
                </ButtonHome>
                <ButtonHome
                  onClick={() => navigate('/dashboard/client/update')}
                >
                  Atualizar Cliente
                </ButtonHome>
                <ButtonHome
                  onClick={() => navigate('/dashboard/client/findOne')}
                >
                  Deletar Cliente
                </ButtonHome>
              </div>
            </Center>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
