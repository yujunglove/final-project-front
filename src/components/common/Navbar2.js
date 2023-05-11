import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './Navbar2.css';

function Navbar2() {
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState('myPage,myToDoList');
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
            <div className={`navbar2 ${activeMenu === "myPage" ? "active" : ""}`} onClick={() => handleClick("myPage")}>나의 정보</div>
          </NavLink>
          <NavLink to="/myPage/Document">
            <div className={`navbar2 ${activeMenu === "Document" ? "active" : ""}`} onClick={() => handleClick("Document")}>서류 신청</div>
          </NavLink>
          <NavLink to="/myPage/partNotice">
            <div className={`navbar2 ${activeMenu === "partNotice" ? "active" : ""}`} onClick={() => handleClick("partNotice")}>부서별 공지사항</div>
          </NavLink>
          <NavLink to="/myPage/news">
            <div className={`navbar2 ${activeMenu === "news" ? "active" : ""}`} onClick={() => handleClick("news")}>뉴스</div>
          </NavLink>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Navbar2;
