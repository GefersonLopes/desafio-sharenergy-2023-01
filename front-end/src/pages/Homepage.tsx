import { ButtonHome } from '../components/buttons/button';
import { Section, SectionDown } from '../components/homepage/styled';
import { LogoInAside } from '../components/logo/logo';
import { AiFillLinkedin, AiFillGithub, AiFillApple } from 'react-icons/ai';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { LottieDown } from '../animation/lottie/componentAnimate/LottieDown';

export const Homepage = () => {
  const { navigate } = useContext(Context);
  return (
    <>
      <LogoInAside />
      <Section>
        <h1>Olá, bem vindo(a) à meu teste</h1>
        <div>
          <ButtonHome onClick={() => navigate('/login')}>Entrar</ButtonHome>
          <ButtonHome onClick={() => navigate('/register')}>
            Registrar
          </ButtonHome>
        </div>
        <a href="#mainHome">
          <LottieDown />
        </a>
      </Section>
      <SectionDown>
        <main id="mainHome">
          <div>
            <ul>
              <li id="profile"></li>
              <li>
                <h3>Geferson Almeida Lopes</h3>
              </li>
              <li>
                <p>Desenvolvedor FullStack</p>
                <p>gefersonjefreey@gmail.com</p>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/algeferson/"
                >
                  <AiFillLinkedin />
                  Perfil do Linkedin
                </a>
                <a target="_blank" href="https://github.com/GefersonLopes">
                  <AiFillGithub />
                  Perfil do GitHub
                </a>
              </li>
              <li>
                <a target="_blank" href="https://invitation-plum.vercel.app/">
                  <AiFillApple />
                  Outro projeto legal
                </a>
              </li>
            </ul>
          </div>
        </main>
      </SectionDown>
    </>
  );
};
