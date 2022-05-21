import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">

              <NavLink className="navbar-brand fw-bolder fs-4 ml-0" to="/">Drishya <i class="fa fa-drupal" aria-hidden="true"></i></NavLink> 
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-5 mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/"><u>Home</u></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about"><u>About</u></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service"><u>Services</u></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact"><u>Contact</u></NavLink>
                    </li>
                  </ul>

                                   

                  {props.auth ?
                  <>
                  <NavLink to="/login" className="btn btn-outline-light ms-auto px-4 rounded-pill">
                    <i className="fa fa-sign-in me-2"></i>Login</NavLink>
                  <NavLink to="/register" className="btn btn-outline-light ms-2 px-4 rounded-pill">
                  <i className="fa fa-user-plus me-2"></i>Register</NavLink>
                    </>
                    :
                    <>
                  <NavLink to="/dashboard" className="btn btn-outline-light ms-2 px-4 rounded-pill">
                    
                  <i className="fa fa-user-plus me-2"></i>Dashboard</NavLink>
                  <NavLink to="/logout" className="btn btn-outline-light ms-2 px-4 rounded-pill">
                  <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
                  </>
            }
                </div>
              </div>
            </nav>
        </div>
    );
}

export default Navbar;
