import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Div } from '../usersCard/styled';
import { motion } from 'framer-motion';

export const UserCardFind = () => {
  const { listAllUsers, findUser } = useContext(Context);

  return (
    <Div>
      <div>
        <input type="text" placeholder="Buscar" />
        <button
          onClick={() => findUser()}
          style={{ width: '15vw', borderRadius: '5px' }}
        >
          Achar
        </button>
      </div>
      <ul
        style={{
          overflowX: 'auto',
          justifyContent: 'initial',
          width: '90%',
          height: '50%',
        }}
      >
        {listAllUsers.map((user) => (
          <motion.li
            key={user.id.value}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <img src={user.picture.large} alt="" />
            <div>
              <p>
                {user.name.first} {user.name.last}
              </p>
              <p>{user.email}</p>
              <p>{user.login.username}</p>
              <p>{user.dob.age}</p>
              <p>{user.gender}</p>
              <p>Tel:{user.phone}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Div>
  );
};
