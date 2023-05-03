import MainCSS from "../components/main/Main.css";
function Main() {

  
    return (
            <div className={MainCSS}>
            <div style={{ display: "flex" }}>
                <div className="weather" style={{ flex: 1 }}>😚 오늘의 날씨는 짜자장 ~ </div>
                <div className="todo" style={{ flex: 1 }}>todo</div>
                <div className="board" style={{ display: "flex", flex: 1 }}>
                <div className="notic" style={{ flex: 1 }}>공지사항</div>
                <div className="partBoard" style={{ flex: 1 }}>부서게시판</div>
                </div>


            <div className="edu">교육 이수</div>
            <div className="meal">나의 식권 조회</div>
            <div className="cal">일정 관리</div>
            <div className="news">Strato News</div>
            </div>
        </div>
    );
}

export default Main;