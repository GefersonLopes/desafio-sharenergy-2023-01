import { ButtonHome } from '../buttons/button';
import { Fieldset, Form } from './styled';
import { motion } from 'framer-motion';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IFormInputsLogin } from '../../interfaces/interfaces';
import { useContext } from 'react';
import { ContextLogic } from '../../context/Provider';
import { LottieError } from '../../animation/lottie/componentAnimate/LottieError';

export const FormLogin = () => {
  const schemaLogin = yup
    .object({
      username: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputsLogin>({
    resolver: yupResolver(schemaLogin),
  });
  const { loginGo, remembe_me } = useContext(ContextLogic);
  const onSubmit = (data: IFormInputsLogin) => loginGo(data);
  return (
    <motion.div
      initial={{ x: -700 }}
      animate={{
        x: 0,
        transition: { duration: 0.4 },
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <span>
          {errors.username || errors.password ? <LottieError /> : null}
        </span>
        <div>
          <h3>Sharenergy</h3>
          <p>Login</p>
        </div>
        <Fieldset>
          <label>
            <input
              className={errors.username && 'errorInput'}
              type="text"
              placeholder={
                errors.username ? errors.username?.message : 'Username'
              }
              {...register('username')}
            />
          </label>
          <label>
            <input
              className={errors.password && 'errorInput'}
              type="password"
              placeholder={
                errors.password ? errors.password?.message : 'Password'
              }
              {...register('password')}
            />
          </label>
          <p className="rootLogin" onClick={() => remembe_me()}>
            Relembre-me
          </p>
        </Fieldset>
        <ButtonHome>Entrar</ButtonHome>
        <p className="goLogin_Register">
          Ainda não possui uma conta? <a href="/register">Criar conta</a>
        </p>
      </Form>
    </motion.div>
  );
};
