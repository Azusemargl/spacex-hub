import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../redux/actions/auth';
import { FieldCreator } from '../Fields/FieldCreator';
import { required } from '../../utils/valodators/validator';
import Title from '../common/Title';


const Input = FieldCreator('input');

const LoginForm = ({ handleSubmit, error }) => {
   return (
      <form className={"form"} onSubmit={handleSubmit}>
         <Field component={Input} validate={[required]} name="email" placeholder="E-mail" />
         <Field component={Input} validate={[required]} name="password" type={"password"} placeholder="Пароль" />
         {error && <p className="warning_alert">{error}</p>}
         <button className="btn btn-submit">Войти</button>
      </form>
   );
};

const LoginReduxForm = reduxForm({form: 'login-form'})(LoginForm)

const Login = () => {
   const dispatch = useDispatch();

   const onLogin = (data) => {
      dispatch(fetchLogin(data.email, data.password));
      return <Redirect to="/" />
   };

   return (
      <div className="auth-block login">
         <Title>Войти</Title>
         <LoginReduxForm onSubmit={onLogin} />
         <div className="auth-footer">
            <div className="auth-footer_item">
               <p>Нет аккаунта?</p>
               <Link className="ref" to="/auth/register">Регистрация</Link>
            </div>
            <Link className="ref" to="/auth/reset">Забыли пароль?</Link>
         </div>
      </div>
   );
};

export default Login;
