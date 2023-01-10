import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { UserCardFind } from '../components/findUser/FindUser';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { ContextLogic } from '../context/Provider';

export const Dashboard_user_find = () => {
  const { IsToken, isLoad, loading } = useContext(ContextLogic);
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
            <UserCardFind />
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
