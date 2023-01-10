import { useContext, useEffect, useState } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { Div } from '../components/usersCard/styled';
import { ContextLogic } from '../context/Provider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Client } from '../interfaces/globalInterfaces';

export const Dashboard_clientFindAll = () => {
  const { IsToken, loading, isLoad } = useContext(ContextLogic);
  IsToken();
  setTimeout(() => loading(), 3000);
  const [listAllClients, setListAllClients] = useState<Client[]>();

  useEffect(() => {
    const url = 'http://ec2-18-231-114-17.sa-east-1.compute.amazonaws.com:3000';
    const token = localStorage.getItem('@token');
    axios
      .get(`${url}/clients`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListAllClients(response.data);
      })
      .catch(() => {
        toast.error('Provavelmente seu token expirou');
      });
  }, [listAllClients]);

  return (
    <>
      {isLoad ? (
        <SectionLoad>
          <LottieLoad />
        </SectionLoad>
      ) : (
        <SectionLoad>
          <Main>
            <Div>
              <ul
                style={{
                  overflowX: 'auto',
                  justifyContent: 'initial',
                  width: '90%',
                  height: '60%',
                }}
              >
                {listAllClients?.map((client) => (
                  <li key={client._id}>
                    <div className="divImg">
                      <img
                        src="https://cetcc.com.br/giga_site_git/public/cetcc/img/user/man.png"
                        alt="foto"
                      />
                    </div>
                    <div className="divInfo">
                      <p>{client.name}</p>
                      <p>{client.email}</p>
                      <p>Tel: {client.tel}</p>
                      <p>Endereço: rua - {client.address.street}</p>
                      <p>número - {client.address.number}</p>
                      <p>Cpf: {client.cpf}</p>
                      <p>Id: {client._id}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Div>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
