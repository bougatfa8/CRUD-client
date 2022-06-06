import React, { Component } from 'react'
import './css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {NavLink, Link} from 'react-router-dom';

export default class Header extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
    }
    render() {
        return (
          <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-info" to="/deps">&nbsp;Hortensia Agency</Link>
                        <div className={'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">

                                <Link className="nav-link text-light" to="/deps">&nbsp;Departement</Link>
                                
                           
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Projects">&nbsp; Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/user">&nbsp; Employeur</Link>
                            </li>
                           
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/banks">&nbsp; Banks</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/invoices">&nbsp;  invoices</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/">&nbsp;  Logout</Link>
                            </li>
                            <li>
                            <img  
                            style={{width:"35px",marginLeft:"auto",marginRight:"auto",marginTop:"8px"}}
                            src={require("C:/Users/ASUS/Desktop/travail/cr/crud/client/src/pages/assets/logout.ico")}/>

                            </li>
                      
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </div>
          </>
        )
    }
}
