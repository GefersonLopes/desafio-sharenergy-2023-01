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
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IFormInputsCreateClient } from '../interfaces/interfaces';

export const Dashboard_clientCreate = () => {
  const { IsToken, loading, isLoad, CreateClients } = useContext(ContextLogic);
  IsToken();
  setTimeout(() => loading(), 3000);

  const schemaLogin = yup
    .object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      tel: yup.number().required(),
      street: yup.string().required(),
      number: yup.number().required(),
      cpf: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputsCreateClient>({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit = (data: IFormInputsCreateClient): void => {
    const request = {
      name: data.name,
      email: data.email,
      tel: data.tel,
      address: {
        street: data.street,
        number: data.number,
      },
      cpf: data.cpf,
    };
    console.log(request);
    CreateClients(request);
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
                  <Input type="text" placeholder="Name" {...register('name')} />
                  <Input
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                  />
                  <Input
                    type="text"
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
                      type="text"
                      placeholder="Número"
                      {...register('number')}
                    />
                  </div>
                  <Input type="text" placeholder="CPF" {...register('cpf')} />
                  <ButtonHome type="submit">Criar</ButtonHome>
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
