import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { ButtonHome } from '../components/buttons/button';
import { Client } from '../components/clients/Clients';
import { Center } from '../components/defaultCenter/Center';
import { Input, InputMedium } from '../components/inputs/styled';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { ContextLogic } from '../context/Provider';
import * as yup from 'yup';
import { IFormInputsUpdateClient } from '../interfaces/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const Dashboard_clientUpdate = () => {
  const { IsToken, loading, isLoad, UpdateClient, FindOneClient } =
    useContext(ContextLogic);
  IsToken();
  setTimeout(() => loading(), 3000);

  const schema = yup.object({
    name: yup
      .string()
      .nullable(true)
      .transform((_, val) => (val === '' ? undefined : val)),
    email: yup
      .string()
      .nullable(true)
      .transform((_, val) => (val === '' ? undefined : val)),
    tel: yup
      .string()
      .nullable(true)
      .transform((_, val) => (val === '' ? undefined : val)),
    street: yup
      .string()
      .nullable(true)
      .transform((_, val) => (val === '' ? undefined : val)),
    number: yup
      .string()
      .nullable(true)
      .transform((_, val) => (val === '' ? undefined : val)),
    cpf: yup
      .string()
      .nullable(true)
      .transform((_, val) => (val === '' ? undefined : val)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputsUpdateClient>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputsUpdateClient) => {
    const request = {
      name: data.name,
      email: data.email,
      tel: Number(data.tel),
      address: {
        street: data.street,
        number: Number(data.number),
      },
      cpf: data.cpf,
    };
    console.log(request);
    UpdateClient(request);
  };

  return (
    <>
      {isLoad ? (
        <SectionLoad>
          <LottieLoad />
        </SectionLoad>
      ) : (
        <SectionLoad>
          <Main>
            <Center>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Input type="text" placeholder="Id" />
                  <Input
                    type="text"
                    placeholder="Username"
                    {...register('name')}
                  />
                  <Input
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                  />
                  <Input
                    type="number"
                    placeholder="Telefone"
                    {...register('tel')}
                  />
                  <div>
                    <InputMedium
                      type="text"
                      placeholder="Rua"
                      {...register('street')}
                    />
                    <InputMedium
                      type="number"
                      placeholder="Número"
                      {...register('number')}
                    />
                  </div>
                  <Input type="text" placeholder="CPF" {...register('cpf')} />
                  <ButtonHome type="submit">Editar</ButtonHome>
                </div>
              </form>
              <Client />
            </Center>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
