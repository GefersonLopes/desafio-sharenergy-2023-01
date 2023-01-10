import axios from 'axios';
import { createContext, useState } from 'react';
import { Client, INode } from '../interfaces/globalInterfaces';
import {
  IFormInputsLogin,
  IFormInputsRegister,
  InterfaceContextLogic,
  IUpdateClient,
} from '../interfaces/interfaces';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ContextLogic = createContext({} as InterfaceContextLogic);

export const ContextProviderLogic = ({ children }: INode) => {
  const url = 'http://ec2-18-231-114-17.sa-east-1.compute.amazonaws.com:3000';
  const navigate = useNavigate();
  const [isLoad, setIsLoad] = useState(true);
  const [clientCreated, setClientCreated] = useState<Client>();

  const loading = () => {
    setIsLoad(false);
  };

  const remembe_me = () => {
    const token = localStorage.getItem('@token');
    if (token) {
      setIsLoad(true);
      navigate('/dashboard/user');
    } else {
      navigate('/login');
      toast.error('Você deve logar');
    }
  };
  const loginGo = (data: IFormInputsLogin) => {
    const { username, password } = data;
    axios
      .post(`${url}/users/login`, {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem('@token', response.data.token);
        toast.success('Login realizado com sucesso!');
        setIsLoad(true);
        navigate('/dashboard/user');
      })
      .catch(() => {
        toast.error('Seus dados estão incorretos!');
      });
  };

  const registerGo = (data: IFormInputsRegister) => {
    const { username, password, email, age } = data;
    axios
      .post(`${url}/users/register`, {
        username,
        password,
        email,
        age,
      })
      .then(() => {
        toast.success('Usuario cadastrado!');
        setIsLoad(true);
        navigate('/login');
      })
      .catch(() => {
        toast.error('Já existe esse usuário!');
      });
  };

  const IsToken = () => {
    const token = localStorage.getItem('@token');
    if (!token) {
      toast('Não é permitido entrar sem login!');
      navigate('/login');
    }
  };

  const CreateClients = (data: Client): void => {
    const token = localStorage.getItem('@token');
    axios
      .post(`${url}/clients`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setClientCreated(response.data);
      })
      .catch(() => {
        toast.error('Provavelmente seu token expirou');
      });
  };

  const FindOneClient = (): void => {
    const input = document.querySelector('input');
    const token = localStorage.getItem('@token');

    axios
      .get(`${url}/clients/${input?.value}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setClientCreated(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Id inválido');
      });
  };

  const DeleteClient = (): void => {
    const input = document.querySelector('input');
    const token = localStorage.getItem('@token');

    axios
      .delete(`${url}/clients/${input?.value}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success('Cliente deletado');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Id inválido');
      });
  };

  const UpdateClient = (data: IUpdateClient): void => {
    const input = document.querySelector('input');
    const token = localStorage.getItem('@token');

    axios
      .patch(`${url}/clients/${input?.value}`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setClientCreated(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Id inválido');
      });
  };

  return (
    <ContextLogic.Provider
      value={{
        isLoad,
        loading,
        loginGo,
        registerGo,
        remembe_me,
        IsToken,
        CreateClients,
        clientCreated,
        FindOneClient,
        DeleteClient,
        setClientCreated,
        UpdateClient,
      }}
    >
      {children}
    </ContextLogic.Provider>
  );
};
