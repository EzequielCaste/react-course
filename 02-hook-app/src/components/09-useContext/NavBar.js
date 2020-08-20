import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <Link to="/" class="navbar-brand">useContext</Link>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink>
        <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
        <NavLink exact activeClassName="active" to="/login" className="nav-link">Login</NavLink>
        
      </div>
    </div>
  </nav>
  )
}
