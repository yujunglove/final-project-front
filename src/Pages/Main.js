import MainCSS from "../components/main/Main.css";
function Main() {

  
    return (
        <div className={MainCSS}>
            <div className="todo">todo</div>

            <div className="board">
            <div className="notic">공지사항</div>
            <div className="partBoard">부서게시판</div>
            </div>

            <div className="edu">교육 이수</div>
            <div className="edu">나의 식권 조회</div>
            <div className="edu">일정 관리</div>
            <div className="edu">Strato News</div>
        </div>
    );
}

export default Main;