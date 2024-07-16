import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/">BookStore</NavLink>
      </div>
      <nav className="header-nav">
        <div className="dropdown">
          <button className="dropbtn">Books</button>
          <div className="dropdown-content">
            <NavLink to="/category/fiction">Fiction</NavLink>
            <NavLink to="/category/non-fiction">Non-Fiction</NavLink>
            <NavLink to="/category/science">Science</NavLink>
            {/* Add more categories here */}
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Authors</button>
          <div className="dropdown-content">
            <NavLink to="/authors/author1">Author 1</NavLink>
            <NavLink to="/authors/author2">Author 2</NavLink>
            {/* Add more authors here */}
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Genres</button>
          <div className="dropdown-content">
            <NavLink to="/genres/genre1">Genre 1</NavLink>
            <NavLink to="/genres/genre2">Genre 2</NavLink>
            {/* Add more genres here */}
          </div>
        </div>
      </nav>
      <div className="header-signin">
        <NavLink to="/signin">Sign In</NavLink>
      </div>
    </header>
  );
}

export default Header;
