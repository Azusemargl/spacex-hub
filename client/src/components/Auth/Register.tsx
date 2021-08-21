import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { fetchRegister } from '../../redux/reducers/authReducer';
import { FieldCreator } from '../Fields/FieldCreator';
import { required } from '../../utils/valodators/validator';
import Title from '../common/Title';

const RegisterForm: React.FC<InjectedFormProps<ValueType>> = ({ handleSubmit, error }) => {
   const Input = FieldCreator("input");

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
}

const RegisterReduxForm = reduxForm<ValueType>({ form: 'register-form' })(RegisterForm)

const Register = () => {
   const dispatch = useDispatch();

   const [redirect, setRedirect] = React.useState(false);

   const onRegister = (data: ValueType) => {
      dispatch(fetchRegister(data.login, data.email, data.password));
      setRedirect(true)
      onRedirect()
   };

   const onRedirect = () => {
      if (redirect) return <Redirect to="/" />
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

// Types
type ValueType = {
   login: string
   email: string
   password: string
}