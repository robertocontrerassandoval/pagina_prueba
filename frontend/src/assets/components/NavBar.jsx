import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/react.svg';

const NavBar = () => {

    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'undifined');
    return (
        <div>
        <nav className="navbar">
            <div className="left">
                <NavLink className={setActiveClass} to="/"> <img src={logo} alt="Logo" />  </NavLink>
            </div>
            <div className="right">
                <NavLink className={setActiveClass} to="/"> Home </NavLink>
                <NavLink className={setActiveClass} to="/sobre-mi"> Sobre Mi </NavLink>
                <NavLink className={setActiveClass} to="/contacto"> Contacto </NavLink>
            </div>
        </nav>
    </div>
    );
}

export default NavBar;
