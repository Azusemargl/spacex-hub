import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { fetchRegister } from '../../redux/actions/auth';
import { FieldCreator } from '../Fields/FieldCreator';
import { required } from '../../utils/valodators/validator';
import Title from '../common/Title';
import { Link, Redirect } from 'react-router-dom';

const Input = FieldCreator('input');

const RegisterForm = ({ handleSubmit, error }) => {
   return (
      <form className={"form"} onSubmit={handleSubmit}>
         <Field component={Input} validate={[required]} name="login" placeholder="Логин" />
         <Field component={Input} validate={[required]} name="email" placeholder="E-mail" />
         <Field component={Input} validate={[required]} name="password" type={"password"} placeholder="Пароль" />
         <Field component={Input} validate={[required]} name="password_2" type={"password"} placeholder="Повтор пароля" />
         <button className="btn btn-submit">Регистрация</button>
         {error && <p className="warning_alert">{error}</p>}
      </form>
   );
};

const RegisterReduxForm = reduxForm({form: 'register-form'})(RegisterForm);

const Register= () => {
   const dispatch = useDispatch();

   const onRegister = (data) => {
      dispatch(fetchRegister(data.login, data.email, data.password));
      return <Redirect to="/" />
   };

   return (
      <div className="auth-block register">
         <Title>Регистрация</Title>
         <RegisterReduxForm onSubmit={onRegister} />
         <div className="auth-footer">
            <div className="auth-footer_item">
               <p>Есть аккаунт?</p>
               <Link className="ref" to="/auth/login">Войти</Link>
            </div>
         </div>
      </div>
   );
};

export default Register;
