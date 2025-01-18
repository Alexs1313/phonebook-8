import Contacts from 'pages/Contacts';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};
