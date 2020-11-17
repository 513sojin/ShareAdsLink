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
            <p>웹 페이지 홍보,</p>
            <p><span>광고 교환</span>으로 쉽고 저렴하게.</p>
            <p className="sub">어려운 웹 페이지 홍보도 ShareAdsLink에서 저렴하게 시작하세요.</p>
          </div>
          <div className="photo"></div>
        </div>

        <div className="secondPage">
          <div className="ment">
            <div>어떻게?</div>
            <div className="sub">비밀이야 아아아</div>
            <div>방법은?</div>
          </div>
        </div>
        <div className="thirdPage"></div>
        <div className="footer"></div>
      </div>
    </div>
    );
}
export default Home;