import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import logo from './sal2.png';

//»ó´Ü¹Ù
function Header(){
    return(
        <div>
            <header>
                <img src={logo} width='250' height='70'/>
                <nav>
                    <Link to="/">
                        <li className="button">Home</li>
                    </Link>
                    <Link to="/Login">
                        <li className="button">LogIn</li>
                    </Link>
                    <Link to="/SignUp">
                        <li className="button">SignUp</li>
                    </Link>
                        <li className="button">Profile</li>
                </nav>
            </header>
        </div>
    );
}
export default Header;