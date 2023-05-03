import MainCSS from "../components/main/Main.css";
function Main() {

  
    return (
            <div className={MainCSS}>
            <div style={{ display: "flex" }}>
                <div className="weather" style={{ flex: 1 }}>😚 오늘의 날씨는 짜자장 ~</div> 
                <div className="todo1" style={{ flex: 1 }}>
                <div class="todoText1">할 일</div>
                <div class="todoText0">할 일일</div>
                <div class="todoNumber1">3</div>
                 </div>

                <div className="todo2" style={{ flex: 1 }}>
                <div class="todoText2">A 구역 리프트 점검</div>
                <div class="todoMinibar1">진행중</div>
                <div class="todoMinibar2">장치관리</div>
                <div class="todoMinibar3">물청소</div>
                </div>

                <div className="todo3" style={{ flex: 1 }}>
                <div class="todoText3">새로운 파트너 관리 교육</div>
                <div class="todoMinibar4">완료</div>
                <div class="todoMinibar5">리프트 안전 교육</div>
                <div class="todoMinibar6">관리</div>
                </div>
               

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