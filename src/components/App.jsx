import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Layout from 'components/Layout';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
};
