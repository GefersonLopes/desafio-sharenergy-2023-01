import Lottie from 'lottie-react';
import errorSvg from '../../lottie/error.json';

export const LottieError = () => {
  return (
    <Lottie
      style={{
        width: '10vw',
        height: '10vh',
        position: 'absolute',
        top: '7vh',
        left: '5vw',
      }}
      animationData={errorSvg}
      loop={true}
    />
  );
};
