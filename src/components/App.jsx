import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Layout from 'components/Layout';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';
// import PrivateRoute from './PrivateRoute';
// import { useSelector } from 'react-redux';
// import { selectIsRefreshing } from 'redux/auth/selectors';
// import {useEffect} from 'react';
// import { useDispatch } from "react-redux";
// import { refreshUser } from "redux/auth/operations";
// import PrivateRoute from './PrivateRoute';

export const App = () => {
  return (
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // const isRefreshing = useSelector(selectIsRefreshing);
  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        
         {/* <Route path='/' element={<PrivateRoute/>}>
          <Route index path='/' element={<Contacts/>}></Route>
        </Route> */}
        <Route index path="/" element={<Contacts />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/register" element={<Register />}/>
      </Route>
    </Routes>
  );
};
