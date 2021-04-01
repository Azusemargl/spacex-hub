import React from 'react';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';

const Auth = () => {
   const [authStep, setAuthStep] = React.useState(0);

   const onLoginStep = () => {
      setAuthStep(authStep - 1)
   };

   const onRegisterStep = () => {
      setAuthStep(authStep + 1)
   };

   const onRegister = (data) => {
      console.log(data.login, data.email, data.password, data.password_2);
   };

   const authComponents = {
      0: <Login onRegisterStep={onRegisterStep} />,
      1: <Register onLoginStep={onLoginStep} onSubmit={onRegister} />,
   };

   return (
      <div className="auth">
         {authComponents[authStep]}
      </div>
   );
};

export default Auth;
