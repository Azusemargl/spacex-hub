import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className="header">
         <Link className="logo" to="/">SpaceX Hub</Link>
         <nav>
            <ul className="menu">
               <li className="menu-item">
                  <Link to="/" className="menu-link">Главная</Link>
               </li>
               <li className="menu-item">
                  <Link to="/launches" className="menu-link">Запуски</Link>
               </li>
               <li className="menu-item">
                  <Link to="/missions" className="menu-link">Миссии</Link>
               </li>
               <li className="menu-item">
                  <Link to="/cores" className="menu-link">Двигатели</Link>
               </li>
            </ul>
         </nav>
         <div className="auth">
            <Link className="auth-item" to="login">Войти</Link>
            <Link className="auth-item" to="logout">Регистрация</Link>
         </div>
      </header>
   )
}

export default Header
