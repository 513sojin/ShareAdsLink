import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
//»ó´Ü¹Ù
function Header(){
    return(
        <div>
            <header>
                <div>ShareAdsLink</div>
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
                </nav>
            </header>
        </div>
    );
}
export default Header;