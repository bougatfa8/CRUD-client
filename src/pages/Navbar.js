import React, {useContext} from 'react';
import {NavLink, Link} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
const Navbar = ()=> {


/*
    <div>
      <li><Link to="/deps">&nbsp;Departement</Link></li>,
          <li><Link to="/user">&nbsp; Employeur</Link></li>,
          <li><Link to="/Projects">&nbsp; Projects</Link></li>,
          <li><Link to="/banks">&nbsp; Banks</Link></li>,

    
        </div>
*/

    
    return (
      <>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MDB Logo"
        loading="lazy"
        style="margin-top: -1px;"
      />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
      </ul>
     

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
  </div>

    </nav>
    </div>
    <div>

    </div>
</>
    )
    
}
export default Navbar
