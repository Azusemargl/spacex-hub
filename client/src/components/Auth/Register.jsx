import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Title from '../common/Title';
import { FieldCreator } from '../Fields/FieldCreator';
import { required } from '../../utils/valodators/validator';

const Input = FieldCreator('input');

const RegisterForm = ({ onLoginStep, handleSubmit }) => {
   return (
      <div className="auth-block register">
         <Title>Регистрация</Title>
         <form className={"form"} onSubmit={handleSubmit}>
            <Field component={Input} validate={[required]} name="login" placeholder="Логин" />
            <Field component={Input} validate={[required]} name="email" placeholder="E-mail" />
            <Field component={Input} validate={[required]} name="password" type={"password"} placeholder="Пароль" />
            <Field component={Input} validate={[required]} name="password_2" type={"password"} placeholder="Повтор пароля" />
            <button className="btn btn-submit">Регистрация</button>
         </form>
         <p>Есть аккаунт</p>
         <button className="ref" onClick={() => onLoginStep()}>Войти</button>
      </div>
   );
};

const Register = reduxForm({form: 'login-form'})(RegisterForm)

export default Register;
