import { useContext, useEffect } from 'react';
import { ContextLogic } from '../../context/Provider';
import { UlClients } from './styled';

export const Client = () => {
  const { clientCreated } = useContext(ContextLogic);

  return (
    <UlClients>
      <li>
        <img
          src="https://cetcc.com.br/giga_site_git/public/cetcc/img/user/man.png"
          alt="foto"
        />
        <div>
          <p>{clientCreated && clientCreated.name}</p>
          <p>{clientCreated && clientCreated.email}</p>
          <p>{clientCreated && `Tel: ${clientCreated.tel}`}</p>
          <p>
            {clientCreated && `Endereço: rua - ${clientCreated.address.street}`}
          </p>
          <p>{clientCreated && `número - ${clientCreated.address.number}`}</p>
          <p>{clientCreated && `Cpf: ${clientCreated.cpf}`}</p>
          <p>{clientCreated && `Id: ${clientCreated._id}`}</p>
        </div>
      </li>
    </UlClients>
  );
};
