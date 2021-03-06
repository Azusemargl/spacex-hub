import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchLogout } from '../redux/reducers/authReducer';
import Menu from './Menu';
import { AppState } from '../redux/store';

const Header: React.FC = () => {
   const dispatch = useDispatch();
   const { login, isAuth } = useSelector(({ authReducer }: AppState) => authReducer);

   const [mobileActive, setMobileActive] = React.useState(false)

   // User token delete
   const deleteCookie = (name: string) => {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
   };

   // Log out
   const onLogout = () => {
      deleteCookie('jwt');
      dispatch(fetchLogout());
      return <Redirect to="/auth" />
   }

   return (
      <header className="header">
         <Link className="logo" to="/">SpaceX Hub</Link>
         <Menu active={mobileActive} setMobileActive={setMobileActive} />
         <div className="header__block">
            {isAuth
               ? <div className="auth_block">
                  <p>{login}</p>
                  <button className="auth_block-item" onClick={() => onLogout()}>Выйти</button>
               </div>
               : <Link className="auth_block-item" to="/auth/login">Войти</Link>
            }
            <div className={`burger ${mobileActive ? "active" : ""}`} onClick={() => setMobileActive(!mobileActive)}>
               <span></span>
            </div>
         </div>
      </header>
   )
}

export default Header