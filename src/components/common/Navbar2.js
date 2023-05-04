import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './Navbar2.css';
import MyPage from "../../Pages/myPagepage/MyPage";

function Navbar2() {
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState('myPage');

  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  
  return (
    <div className={styles.Navbar2}>
      <div class="title1">
        <div class="title2">
          <b>마이페이지</b>
        </div>
        <div class="navbar2-wrapper">
        <NavLink to="/MyPage">
          <div class={`navbar2 ${activeMenu === "info" ? "active" : ""}`} onClick={() => handleClick("info")}>나의 정보</div>
          </NavLink>
          <NavLink to="/MyToDoList">
          <div class={`navbar2 ${activeMenu === "todo" ? "active" : ""}`} onClick={() => handleClick("todo")}>할 일</div>
          </NavLink>
          <div class={`navbar2 ${activeMenu === "ticket" ? "active" : ""}`} onClick={() => handleClick("ticket")}>식권 조회</div>
          <div class={`navbar2 ${activeMenu === "board" ? "active" : ""}`} onClick={() => handleClick("board")}>부서 게시판</div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Navbar2;
