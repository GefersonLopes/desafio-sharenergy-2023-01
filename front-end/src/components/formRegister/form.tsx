import { ButtonHome } from '../buttons/button';
import { Fieldset, Form } from '../formLogin/styled';
import { motion } from 'framer-motion';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IFormInputsRegister } from '../../interfaces/interfaces';
import { useContext } from 'react';
import { ContextLogic } from '../../context/Provider';
import { LottieError } from '../../animation/lottie/componentAnimate/LottieError';

export const FormRegister = () => {
  const schemaRegister = yup
    .object({
      username: yup.string().required(),
      password: yup.string().required(),
      email: yup.string().required().email(),
      age: yup.number().positive().required().min(18),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputsRegister>({
    resolver: yupResolver(schemaRegister),
  });
  const { registerGo } = useContext(ContextLogic);
  const onSubmit = (data: IFormInputsRegister) => registerGo(data);

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
          {errors.username || errors.password || errors.email || errors.age ? (
            <LottieError />
          ) : null}
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
          <label>
            <input
              className={errors.email && 'errorInput'}
              type="text"
              placeholder={errors.email ? errors.email?.message : 'Email'}
              {...register('email')}
            />
          </label>
          <label>
            <input
              className={errors.age && 'errorInput'}
              type="text"
              placeholder={errors.age ? errors.age?.message : 'Age'}
              {...register('age')}
            />
          </label>
        </Fieldset>
        <ButtonHome>Registrar</ButtonHome>
        <p className="goLogin_Register">
          Ainda não possui uma conta? <a href="/login">Entrar na conta</a>
        </p>
      </Form>
    </motion.div>
  );
};
