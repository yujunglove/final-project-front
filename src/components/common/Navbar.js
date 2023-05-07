import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavbarCSS from './Navbar.css';
import Main from '../../Pages/Main';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");

  const [selectedMenu, setSelectedMenu] = useState('myPage');

  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  
  return (
    <body>
    <div className={ NavbarCSS}>
      <div className="mainProfil">
        <img className="logo1" src="image/profileLogo.png"/>
        <div className="loginLogo">로그인</div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="nemo"></div>
        <div className="memberName1">어트랙션-A 석이현</div>
        <div className="memberName2">000-0000-0000</div>
      </div>
      <div className="menu" style={{ marginTop: "-20px"}}>
        <NavLink to="/MyPage">
          <div className="myPage nav"><img className="menuIcon navImg" src="image/MyPage.png"></img>마이페이지</div>
        </NavLink>
        <NavLink to="/salary">
          <div className="salary nav"><img className="menuIcon navImg" src="image/salary.png"></img>급여 내역</div>
        </NavLink>
        <NavLink to="/">
          <div className="home nav"><img className="menuIcon navImg" src="image/Cal.png"></img>일정</div>
        </NavLink>
        <NavLink to="/">
          <div className="home nav"><img className="menuIcon navImg" src="image/Board.png"></img>게시판</div>
        </NavLink>
        <NavLink to="/">
          <div className="home nav"><img className="menuIcon navImg" src="image/Member.png"></img>직원</div>
        </NavLink>
        <NavLink to="/">
          <div className="manager nav"><img className="menuIcon navImg" src="image/Management.png"></img>장비 & 리프트 관리</div>
        </NavLink>
        <NavLink to="/">
          <div className="home nav" ><img className="menuIcon navImg" src="image/Auto.png"></img>전자 결재</div>
        </NavLink>
        <NavLink to="/">
          <div className="home nav"><img className="menuIcon navImg" src="image/Edu.png"></img>직원 교육</div>
        </NavLink>
      </div>
    </div>

    <div className="menu2">
      <div class="line"></div>
      <NavLink to="/">
        <img className="circle4" src="image/circle.png"></img>
      </NavLink>
    </div>
    </body>
  );
}

export default Navbar;
