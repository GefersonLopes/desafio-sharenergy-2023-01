import { Client } from './globalInterfaces';

export interface InterfaceContextLogic {
  loading: () => void;
  isLoad: boolean;
  loginGo: (value: IFormInputsLogin) => void;
  registerGo: (value: IFormInputsRegister) => void;
  remembe_me: () => void;
  IsToken: () => void;
  CreateClients: (value: Client) => void;
  clientCreated: Client | undefined;
  FindOneClient: () => void;
  DeleteClient: () => void;
  setClientCreated: (value: Client | undefined) => void;
  UpdateClient: (value: IUpdateClient) => void;
}

export interface IFormInputsRegister {
  username: string;
  password: string;
  email: string;
  age: number;
}

export interface IFormInputsLogin {
  username: string;
  password: string;
}

export interface IFormInputsCreateClient {
  name: string;
  email: string;
  tel: string;
  street: string;
  number: string;
  cpf: string;
}

export interface IFormInputsUpdateClient {
  name?: string;
  email?: string;
  tel?: string;
  street?: string;
  number?: string;
  cpf?: string;
}

export interface IUpdateClient {
  name?: string;
  email?: string;
  tel?: number;
  address?: { street?: string; number?: number };
  cpf?: string;
}
