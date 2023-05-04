import MainCSS from "../components/main/Main.css";
function Main() {

  
    return (
            <div className={MainCSS}>
            <div style={{ display: "flex" }}>
                <div className="weather" style={{ flex: 1 }}>😚 오늘의 날씨는 짜자장 ~</div> 
                <div className="todo1" style={{ flex: 1 }}>
                <div class="todoText1">할 일</div>
                <div class="todoText0">3</div>
                <div class="todoNumber1">뉴뉴뉴</div>
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
                <div className="noticNemo"></div>

                    <div class="boardMinibar1">

                    <div class="notic1">
                    <div class="circle9"></div><div class="notic2">오늘의 부서 회의가 있습니다.</div>
                    </div>
                    </div>

                <div className="partBoard" style={{ flex: 1 }}>부서게시판</div>
                
                <div class="boardMinibar2">
                <div class="notic1">
                    <div class="circle9"></div><div class="notic2">오늘 날씨가 안좋네요.</div>
                    </div>
                </div>
                </div>


            <div className="edu">
                <div class="edutitle1">내가 해야 할 </div>
                <div class="educircle1"></div><div class="edutitle2">화재 교육</div>
                <img className="img1" src="image/image 188.png"/>
                <div class="ing">진행중</div>
               </div>
            <div className="meal">
                <div class="mealtile1">나의 식권 조회</div>
                <div class="mealcircle"></div>
                <div class="meal2">오늘은 무슨 볶음밥을 만들까용</div>
                </div>
            <div className="cal">
            <div class="caltile1">일정관리</div>
            <div class="mealcircle"></div>
            <div class="meal2">오늘은 어떠한 일정이 있을까용</div>  
            </div>
            <div className="news">
                <div class="newstitle">Strato News</div>
                <div class="newscircle"></div>
                <div class="newsItem">오늘은 어떤 뉴스가있을까용</div>
                </div>
            </div>
        </div>
    );
}

export default Main;