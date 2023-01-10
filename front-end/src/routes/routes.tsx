import { Route, Routes } from 'react-router-dom';
import { Dashboard_client } from '../pages/Dashboard_client';
import { Dashboard_clientCreate } from '../pages/Dashboard_clientCreate';
import { Dashboard_clientFindAll } from '../pages/Dashboard_clientFindAll';
import { Dashboard_clientFindOne } from '../pages/Dashboard_clientFindOne';
import { Dashboard_clientUpdate } from '../pages/Dashboard_clientUpdate';
import { Dashboard_httpCat } from '../pages/Dashboard_httpCat';
import { Dashboard_httpDog } from '../pages/Dashboard_httpDog';
import { Dashboard_user } from '../pages/Dashboard_user';
import { Dashboard_user_find } from '../pages/Dashboard_user_find';
import { Homepage } from '../pages/Homepage';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const RouteInPage = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/user" element={<Dashboard_user />} />
      <Route path="/dashboard/user/find" element={<Dashboard_user_find />} />
      <Route path="/dashboard/httpCat" element={<Dashboard_httpCat />} />
      <Route path="/dashboard/httpDog" element={<Dashboard_httpDog />} />
      <Route path="/dashboard/client" element={<Dashboard_client />} />
      <Route
        path="/dashboard/client/create"
        element={<Dashboard_clientCreate />}
      />
      <Route
        path="/dashboard/client/findAll"
        element={<Dashboard_clientFindAll />}
      />
      <Route
        path="/dashboard/client/findOne"
        element={<Dashboard_clientFindOne />}
      />
      <Route
        path="/dashboard/client/update"
        element={<Dashboard_clientUpdate />}
      />
      <Route
        path="/dashboard/client/findOne"
        element={<Dashboard_clientFindOne />}
      />
    </Routes>
  );
};
