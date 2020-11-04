import React from 'react';
import './App.css';
import Header from './Header';
//기본 페이지
function Home(){
    return(
    <div>
      <Header/>
      <div className="wrapper">
        <div className="firstPage">
          <div className="ment">
            <p>광고 공유,</p>
            <p>쉽고 간편하게.</p>
            <p className="sub">어려운 홍보도 ShareAdsLink에서 시작하기</p>
          </div>
          <div className="photo"></div>
        </div>

        <div className="secondPage">
          <div className="ment"></div>
        </div>
        <div className="thirdPage"></div>
        <div className="footer"></div>
      </div>
    </div>
    );
}
export default Home;