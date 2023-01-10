import Lottie from 'lottie-react';
import LoadPage from '../loadPages.json';

export const LottieLoad = () => {
  return (
    <Lottie
      style={{
        width: '15rem',
        height: '15rem',
      }}
      animationData={LoadPage}
      loop={true}
    />
  );
};
