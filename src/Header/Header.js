import React from 'react';
import './Header.css';
import logoImage from './image.png';
import coursesIMG from './cimg.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logoImage} alt="Logo" className="logo" />
      <nav className="menu">
        <span className="menuItemText menuItemText--active">Home</span>
        <span className="menuItemText">
          Courses
          <img src={coursesIMG} alt="Courses Icon" className="menuItemImage" />
        </span>
        <span className="menuItemText">About</span>
        <span className="menuItemText">Contact us</span>
      </nav>
      <button className="loginButton">
        <span className="loginButtonText">Login</span>
      </button>
    </header>
  );
};

export default Header;
