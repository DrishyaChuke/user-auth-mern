import React from 'react';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Drishya Lal Chuke</h1>
                            <h3 className="fw-bolder mb-4 text-center text-white">I'm a Web Developer.</h3>
                            <p className="lead text-center fs-4 mb-5 text-white">
                                I've been learning and working on web technology for the last two years as most of my college projects are based on building web technologies such as HTML/CSS, Javascript.I have been studying and practising React libraries, Angularjs and Vuejs Framework since my graduation.
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/about" className="btn btn-outline-light me-4 rounded-pill px-4 py-2">About Me</NavLink>
                                <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">My Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
        </div>
    );
}

export default Home;
