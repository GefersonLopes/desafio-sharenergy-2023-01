import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalInterfaceContext, INode } from '../interfaces/globalInterfaces';
import axios from 'axios';
import { toast } from 'react-toastify';
import imgError from '../img/imgError.png';
import { CodeList } from '../provider/codeList';

export const Context = createContext({} as GlobalInterfaceContext);

export const ContextProvider = ({ children }: INode) => {
  const navigate = useNavigate();
  const [pages, setPages] = useState(1);
  const [listUsers, setListUsers] = useState([]);
  const [listAllUsers, setListAllUsers] = useState([]);
  const [urlCat, setUrlCat] = useState('');
  const [urlDog, setUrlDog] = useState('');

  const seachCode = () => {
    const input = document.querySelector('input');
    const statusCode = Number(input!.value);
    if (CodeList.includes(statusCode)) {
      setUrlCat(`https://httpcats.com/${statusCode}.jpg`);
    } else {
      setUrlCat(
        `https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png`,
      );
    }
  };

  const nextPage = () => {
    setPages(pages + 1);
  };
  const backPage = () => {
    if (pages !== 1) {
      setPages(pages - 1);
    }
  };

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=${pages}&results=2&seed=abc`)
      .then((response) => {
        setListUsers(response.data.results);
      })
      .catch(() => toast('aparentemente a api não está funcional'));
  }, [pages]);

  useEffect(() => updateImgDot(), []);

  const updateImgDot = () => {
    axios
      .get('https://dog.ceo/api/breed/hound/images/random')
      .then((response) => {
        setUrlDog(response.data.message);
      })
      .catch(() => toast('aparentemente a api não está funcional'));
  };

  const findUser = () => {
    axios
      .get(`https://randomuser.me/api/?page=1&results=2500&seed=abc`)
      .then((response) => {
        const input = document.querySelector('input');
        const filterUser = response.data.results.filter((user: any) => {
          const validate = [
            user.email,
            user.name.first,
            user.name.last,
            user.login.username,
          ];
          if (validate.includes(input!.value)) {
            return user;
          }
        });
        setListAllUsers(filterUser);
      })
      .catch(() => toast('Você pesquisou de mais'));
  };

  return (
    <Context.Provider
      value={{
        navigate,
        pages,
        nextPage,
        backPage,
        listUsers,
        seachCode,
        urlCat,
        urlDog,
        updateImgDot,
        listAllUsers,
        findUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
