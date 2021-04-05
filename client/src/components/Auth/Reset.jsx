import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { FieldCreator } from '../Fields/FieldCreator';
import { required } from '../../utils/valodators/validator';
import Title from '../common/Title';

const Input = FieldCreator('input');

const ResetForm = ({ handleSubmit }) => {
   return (
      <form className={"form"} onSubmit={handleSubmit}>
         <Field component={Input} validate={[required]} name="reset" placeholder="E-mail" />
         <button className="btn btn-submit">Восстановить</button>
      </form>
   );
};

const ResetReduxForm = reduxForm({form: 'reset-form'})(ResetForm)

const Login = () => {
   const onReset = (data) => {
      console.log(data.email);
   };
   
   return (
      <div className="auth-block login">
         <Title>Восстановить пароль</Title>
         <ResetReduxForm />
         <div className="auth-footer">
            <Link className="ref" to="/auth/login">Вспомнили пароль?</Link>
         </div>
      </div>
   );
};

export default Login;
