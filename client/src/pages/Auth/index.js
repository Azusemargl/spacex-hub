import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Route } from "react-router-dom";
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import Reset from '../../components/Auth/Reset';

const Auth = () => {
   const isAuth = useSelector(({ authReducer }) => authReducer.isAuth);

   if (isAuth) return <Redirect to="/" />

   return (
      <div className="auth">
         <Route path="/auth/login" component={Login} exact />
         <Route path="/auth/register" component={Register} exact />
         <Route path="/auth/reset" component={Reset} exact />
      </div>
   );
};

export default Auth;
