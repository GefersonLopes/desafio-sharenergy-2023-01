import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { SectionLoad } from '../components/load/styled';
import { useContext } from 'react';
import { ContextLogic } from '../context/Provider';
import { FormRegister } from '../components/formRegister/form';

export const Register = () => {
  const { isLoad, loading } = useContext(ContextLogic);
  setTimeout(() => loading(), 3000);
  return (
    <>
      {isLoad ? (
        <SectionLoad>
          <LottieLoad />
        </SectionLoad>
      ) : (
        <SectionLoad>
          <FormRegister />
        </SectionLoad>
      )}
    </>
  );
};
