import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC<Props> = ({ active, setMobileActive }) => {
   return (
      <ul className={`menu ${active ? "active" : ""}`}>
         <li className="menu-item" onClick={() => setMobileActive && setMobileActive(false)}>
            <Link to="/" className="menu-link">Главная</Link>
         </li>
         <li className="menu-item" onClick={() => setMobileActive && setMobileActive(false)}>
            <Link to="/launches" className="menu-link">Запуски</Link>
         </li>
         <li className="menu-item" onClick={() => setMobileActive && setMobileActive(false)}>
            <Link to="/missions" className="menu-link">Миссии</Link>
         </li>
         <li className="menu-item" onClick={() => setMobileActive && setMobileActive(false)}>
            <Link to="/cores" className="menu-link">Двигатели</Link>
         </li>
      </ul>
   );
};

export default Menu;

// Types
type Props = {
   active?: boolean
   setMobileActive?: (value: boolean) => void
}