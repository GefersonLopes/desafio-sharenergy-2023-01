import Lottie from 'lottie-react';
import DownLottie from '../down.json';

export const LottieDown = () => {
  return (
    <Lottie
      style={{
        width: '50px',
        height: '50px',
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
      }}
      animationData={DownLottie}
      loop={true}
    />
  );
};
