import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { UserCard } from '../components/usersCard/UserCard';
import { ContextLogic } from '../context/Provider';

export const Dashboard_user = () => {
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
            <UserCard />
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
