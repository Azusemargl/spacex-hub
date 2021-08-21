import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../redux/reducers/authReducer';
import { FieldCreator } from '../Fields/FieldCreator';
import { required } from '../../utils/valodators/validator';
import Title from '../common/Title';

const Input = FieldCreator("input");

const LoginForm: React.FC<InjectedFormProps<ValueType>> = ({ handleSubmit, error }) => {
   return (
      <form className={"form"} onSubmit={handleSubmit}>
         <Field component={Input} validate={[required]} name="email" placeholder="E-mail" />
         <Field component={Input} validate={[required]} name="password" type={"password"} placeholder="Пароль" />
         {error && <p className="warning_alert">{error}</p>}
         <button className="btn btn-submit">Войти</button>
      </form>
   );
};

const LoginReduxForm = reduxForm<ValueType>({form: 'login-form'})(LoginForm)

const Login = () => {
   const dispatch = useDispatch();

   const [redirect, setRedirect] = React.useState(false);

   const onLogin = (data: ValueType) => {
      dispatch(fetchLogin(data.email, data.password));
      setRedirect(true)
      onRedirect()
   };

   const onRedirect = () => {
      if (redirect) return  <Redirect to="/" />
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

// Types
type ValueType = {
   email: string
   password: string
}