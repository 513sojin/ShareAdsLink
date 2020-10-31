import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import User from './Component/User';
import AdContent from './Component/AdContent';
import Home from './Home';

function App() {
  return (
    <Router>
      <header>
        <div>ShareAdsLink</div>
        <nav>
            <Link to="/User">
              <li className="button">Login</li>
            </Link>
            <Link to="/AdContent">
              <li className="button">SignUp</li>
            </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/User" component={User} />
        <Route path="/Adcontent" component={AdContent}/>
      </Switch>
      
      <div className="wrapper">
        
        <div className="firstPage">
          <div className="ment">
            <p>광고 공유,</p>
            <p>쉽고 간편하게.</p>
            <p className="sub">어려운 홍보도 ShareAdsLink에서 쉽게 시작하세요.</p>
          </div>
          <div className="photo"></div>
        </div>

        <div className="secondPage">
          <div className="ment">
            <p>광고 공유,</p>
            <p>쉽고 간편하게.</p>
            <p className="sub">어려운 홍보도 ShareAdsLink에서 쉽게 시작하세요.</p>
          </div>
        </div>
        <div className="thirdPage"></div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
