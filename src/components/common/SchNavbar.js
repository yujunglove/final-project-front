import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import schStyle from "./SchNavbar.css";

function SchNavbar() {
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState('calendar');
  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  
  return (
    <div className={schStyle.schNavbar}>
      <div className="title1">
        <div className="title2">
          <b>일 정</b>
        </div>
        <div className="schNavbar-wrapper">
          <NavLink to="/calendar">
            <div className={`schNavbar ${activeMenu === "calendar" ? "active" : ""}`} onClick={() => handleClick("calendar")}>캘린더</div>
          </NavLink>
          <NavLink to="/calendar/allSch">
            <div className={`schNavbar ${activeMenu === "allSch" ? "active" : ""}`} onClick={() => handleClick("allSch")}>전체 일정 조회</div>
          </NavLink>
          <NavLink to="/calendar/workCheck">
            <div className={`schNavbar ${activeMenu === "workCheck" ? "active" : ""}`} onClick={() => handleClick("workCheck")}>근무 내역</div>
          </NavLink>
          <NavLink to="/calendar/holidayCheck">
            <div className={`schNavbar ${activeMenu === "holidayCheck" ? "active" : ""}`} onClick={() => handleClick("holidayCheck")}>휴가 내역</div>
          </NavLink>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default SchNavbar;