import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div>ShareAdsLink</div>
        <nav>
            <li> <a href="#">Login</a></li>
            <li> <a href="#">signin</a></li>
        </nav>
      </header>
      
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
    </div>
  );
}

export default App;
