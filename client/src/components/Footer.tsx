import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Footer: React.FC = () => {
   return (
      <footer className="footer">
         <Link className="footer-logo" to="/">SpaceX Hub</Link>
         <nav className="footer-menu">
            <ul className="footer-nav">
               <Menu />
            </ul>
            <ul className="footer-nav">
               <li className="footer-item">
                  <a href="https://www.spacex.com/" className="footer-link">SpaceX</a>
               </li>
               <li className="footer-item">
                  <Link to="about" className="footer-link">О компании</Link>
               </li>
            </ul>
         </nav>
      </footer>
   )
}

export default Footer