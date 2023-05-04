import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './Navbar2.css';

function Navbar2() {
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState('myPage');

  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  
  return (
    <div className={styles.Navbar2}>
      <div className="title1">
        <div className="title2">
          <b>마이페이지</b>
        </div>
        <div className="navbar2-wrapper">
          <NavLink to="/myPage">
            <div className={`navbar2 ${activeMenu === "info" ? "active" : ""}`} onClick={() => handleClick("info")}>나의 정보</div>
          </NavLink>
          <NavLink to="/myToDoList">
            <div className={`navbar2 ${activeMenu === "todo" ? "active" : ""}`} onClick={() => handleClick("todo")}>할 일</div>
          </NavLink>
          <div className={`navbar2 ${activeMenu === "ticket" ? "active" : ""}`} onClick={() => handleClick("ticket")}>식권 조회</div>
          <div className={`navbar2 ${activeMenu === "board" ? "active" : ""}`} onClick={() => handleClick("board")}>부서 게시판</div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Navbar2;
