import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { ButtonHome } from '../components/buttons/button';
import { CardImg } from '../components/cardCat/cardCat';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { Div } from '../components/usersCard/styled';
import { Context } from '../context/Context';
import { ContextLogic } from '../context/Provider';

export const Dashboard_httpCat = () => {
  const { IsToken, isLoad, loading } = useContext(ContextLogic);
  const { seachCode, urlCat } = useContext(Context);

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
            <Div>
              <CardImg>
                {urlCat !== '' && <img src={urlCat} alt="foto" />}
                <input type="number" placeholder="Status Code" />
                <ButtonHome onClick={() => seachCode()}>Procurar</ButtonHome>
              </CardImg>
            </Div>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
