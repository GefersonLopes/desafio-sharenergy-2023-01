import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { INode } from '../../interfaces/globalInterfaces';
import { MainDashboard } from './styled';
import { IoExit } from 'react-icons/io5';

export const Main = ({ children }: INode) => {
  const { navigate } = useContext(Context);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.0 },
      }}
    >
      <MainDashboard>
        <aside>
          <div>
            <span onClick={() => navigate('/login')}>
              <IoExit />
              Sair
            </span>
            <h1>Sharenergy</h1>
          </div>
          <ul>
            <li>
              <button onClick={() => navigate('/dashboard/user')}>
                <h3>Random User Generator</h3>
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/dashboard/httpCat')}>
                <h3>HTTP Cat</h3>
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/dashboard/httpDog')}>
                <h3>HTTP Dog</h3>
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/dashboard/client')}>
                <h3>Clientes</h3>
              </button>
            </li>
          </ul>
        </aside>
        {children}
      </MainDashboard>
    </motion.div>
  );
};
