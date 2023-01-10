import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Div } from './styled';
import { motion } from 'framer-motion';
import { ButtonHome } from '../buttons/button';
import { BiFileFind } from 'react-icons/bi';

export const UserCard = () => {
  const { pages, nextPage, backPage, listUsers, navigate } =
    useContext(Context);
  return (
    <Div>
      <ul>
        {listUsers.map((user) => (
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
      <div>
        <button className="buttonCircle" onClick={() => backPage()}>
          -
        </button>
        <p>{pages}</p>
        <button className="buttonCircle" onClick={() => nextPage()}>
          +
        </button>
        <ButtonHome
          className="buttonCircle"
          onClick={() => navigate('/dashboard/user/find')}
          style={{ borderRadius: '5px', marginLeft: '10vh' }}
        >
          <BiFileFind />
        </ButtonHome>
      </div>
    </Div>
  );
};
