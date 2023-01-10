import { ReactNode } from 'react';

export interface GlobalInterfaceContext {
  navigate: (value: string) => void;
  nextPage: () => void;
  backPage: () => void;
  pages: number;
  listUsers: any[];
  seachCode: () => void;
  urlCat: string;
  urlDog: string;
  updateImgDot: () => void;
  findUser: () => void;
  listAllUsers: any[];
}

export interface INode {
  children: ReactNode;
}

interface Address {
  street: string;
  number: string;
}

export interface Client {
  _id?: string;
  name: string;
  email: string;
  tel: string;
  address: Address;
  cpf: string;
}
