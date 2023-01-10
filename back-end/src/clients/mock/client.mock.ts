import { Client } from '../entities/client.entity';

const address = {
  street: 'street',
  number: 1,
};

export const client1 = {
  id: '1',
  _id: '1',
  name: 'test1',
  email: 'test1@gmail.com',
  tel: 123456789,
  address: address,
  cpf: '12345678910',
};

export const client2 = {
  name: 'teste2',
  email: 'teste2@gmail.com',
  tel: 123456789,
  address: address,
  cpf: '12345678910',
};

export const client3 = {
  name: 'teste3',
  email: 'teste3@gmail.com',
  tel: 123456789,
  address: address,
  cpf: '12345678910',
};

export const clientUpdate = {
  id: '4',
  name: 'testeUpdate',
  email: 'testeUpdate@gmail.com',
  tel: 123456789,
  address: address,
  cpf: '12345678910',
};

export const mockFindAll = [client1, client2, client3];
