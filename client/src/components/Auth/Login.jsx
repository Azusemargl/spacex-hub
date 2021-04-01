import React from 'react';
import Title from '../common/Title';

const Login = ({ onRegisterStep }) => {
   return (
      <div className="auth-block login">
         <Title>Логин</Title>
         <p>Нет аккаунта?</p>
         <button onClick={() => onRegisterStep()}>Регистрация</button>
      </div>
   );
};

export default Login;
