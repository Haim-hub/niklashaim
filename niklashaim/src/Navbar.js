import React from "react";
import Home from './Home.js';
import CV from './CV.js';
import About from "./About.js";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function Navbar(){
    return(
        <Router>
            <div>
                <div>
                    <nav class="navbar navbar-expand navbar-light  fixed-top">

                        <div class="justify-content-center mx-auto" id="navbarTogglerDemo02 ">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item  p-2">
                                <a class="nav-link bg-light rounded" href="/#">Home</a>
                            </li>
                            <li class="nav-item  p-2">
                                <a class="nav-link bg-light rounded" href="/#CV">CV</a>
                            </li>
                            <li class="nav-item  p-2">
                                <a class="nav-link bg-light rounded" href="/#About">About</a>
                            </li>
                            <li class="nav-item  p-2">
                                <a class="nav-link bg-light rounded" href="#">Work</a>
                            </li>
                            <li class="nav-item  p-2">
                                <a class="nav-link bg-light rounded" href="/#Contact">Contact</a>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </Router>
        
    )
}

export default Navbar;