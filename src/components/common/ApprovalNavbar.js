import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './ApprovalNavbar.css';

function ApprovalNavbar() {
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState('regist, wait, inProgress, accessed, returned');
  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  
  return (
    <div className={styles.Navbar2}>
      <div className="title1">
        <div className="title2">
          <b>전자결재</b>
        </div>
        <div className="navbar2-wrapper">
          <NavLink to="/approval/regist">
            <div className={`navbar2 ${activeMenu === "regist" ? "active" : ""}`} onClick={() => handleClick("regist")}>기안문 작성</div>
          </NavLink>
          <NavLink to="/approval/wait">
            <div className={`navbar2 ${activeMenu === "wait" ? "active" : ""}`} onClick={() => handleClick("wait")}>결재 대기함</div>
          </NavLink>
          <NavLink to="/approval/inProgress">
            <div className={`navbar2 ${activeMenu === "inProgress" ? "active" : ""}`} onClick={() => handleClick("inProgress")}>결재 진행함</div>
          </NavLink>
          <NavLink to="/approval/accessed">
            <div className={`navbar2 ${activeMenu === "accessed" ? "active" : ""}`} onClick={() => handleClick("accessed")}>완료 문서함</div>
          </NavLink>
          <NavLink to="/approval/returned">
            <div className={`navbar2 ${activeMenu === "returned" ? "active" : ""}`} onClick={() => handleClick("returned")}>반려 문서함</div>
          </NavLink>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ApprovalNavbar;
