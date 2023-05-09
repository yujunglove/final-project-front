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
          <NavLink to="/myPage/partBoard">
            <div className={`navbar2 ${activeMenu === "todo" ? "active" : ""}`} onClick={() => handleClick("todo")}>부서 공지사항</div>
          </NavLink>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Navbar2;
