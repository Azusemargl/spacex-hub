import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer className="footer">
         <Link className="footer-logo" to="/">SpaceX Hub</Link>
         <nav>
            <ul className="footer-nav">
               <li className="footer-item">
                  <a href="https://www.spacex.com/" className="footer-link">SpaceX</a>
               </li>
            </ul>
         </nav>
      </footer>
   )
}

export default Footer
