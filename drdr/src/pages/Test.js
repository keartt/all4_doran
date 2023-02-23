import React from 'react';
import Header from './fragment/header';
import '../resource/css/main.css';
import { Link } from 'react-router-dom';


function Test() {
  return (
    <div className="mainContainer">

      <div className='mainCenter'>

        {/* 헤더 부분 */}
        <Header />

        <div className='divMain'>

          {/* 여기서 작업 */}
          <Link to="/home">
              홈화면 이동
          </Link>
          <Link to="/Login">
              로그인화면이동 이동
          </Link>
          <Link to="/ViewFarm">
              Farm화면 이동
          </Link>
          

        </div>


      </div>

    </div>
  );
}

export default Test;
