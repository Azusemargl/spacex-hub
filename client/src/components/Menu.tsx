import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
   return (
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
   );
};

export default Menu;
