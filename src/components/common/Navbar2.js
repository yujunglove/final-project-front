import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar2CSS from './Navbar2.css';

function Navbar2() {
  const [activeMenu, setActiveMenu] = useState("");

  const [selectedMenu, setSelectedMenu] = useState('myPage');

  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  

  return (
<body>    
    <div className={ Navbar2}>
      <div class="title1">
      <div class="title2">
          <b>마이페이지</b>
        </div>
        <div
          class={`navbar2 ${activeMenu === "info" ? "active" : ""}`}
          onClick={() => handleClick("info")}
        >
          나의 정보
        </div>
        <div
          class={`navbar2 ${activeMenu === "todo" ? "active" : ""}`}
          onClick={() => handleClick("todo")}
        >
          할 일
        </div>
        <div
          class={`navbar2 ${activeMenu === "ticket" ? "active" : ""}`}
          onClick={() => handleClick("ticket")}
        >
          식권 조회
        </div>
        <div
          class={`navbar2 ${activeMenu === "board" ? "active" : ""}`}
          onClick={() => handleClick("board")}
        >
          부서 게시판
        </div>
          <div class="navbar2"></div>
          <hr></hr>
    </div>
    </div>
</body>
  );
}

export default Navbar2;
