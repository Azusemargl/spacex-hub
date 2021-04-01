import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Header = () => {
   return (
      <header className="header">
         <Link className="logo" to="/">SpaceX Hub</Link>
         <nav className="menu">
            <Menu />
         </nav>
         <div className="auth">
            <Link className="auth-item" to="auth">Войти</Link>
            <Link className="auth-item" to="logout">Регистрация</Link>
         </div>
      </header>
   )
}

export default Header
