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
                <div className="All">
                <div className="todo2" style={{ flex: 1 }}>
                <div class="todoText2">A 구역 리프트 점검</div>
                
                <div class="todoMinibar1">진행중</div>
                <div class="todoMinibar2">장치관리</div>
                <div class="todoMinibar3">물청소</div>
                </div>

                <div className="todo3" style={{ flex: 1 }}>
                <div class="todoText3">파트너 관리 교육</div>
                <div class="todoMinibar4">완료</div>
                <div class="todoMinibar5">리프트 교육</div>
                <div class="todoMinibar6">관리</div>
                </div>
               </div>

                <div className="board" style={{ display: "flex", flex: 1 }}>
                <div className="notic" style={{ flex: 1 }}>공지사항</div>
                <div className="noticNemo"></div>

                    <div class="boardMinibar1">

                    <div class="notic1">
                    <div class="circle9"></div><div class="notic2">오늘의 부서 회의가 있습니다.</div>
                    </div>
                    </div>

                </div>

                  
                <div class="boardMinibar2">
                <div class="circle10"></div><div class="notic3">오늘 날씨가 안좋네요.</div>
                <div class="circle11"></div><div class="notic4">오늘 날씨가 안좋네요.</div>
                <img className="BoradImg" src="image/image 434.png"/>
                </div>
                <div className="partBoard" style={{ flex: 1 }}>Strato News</div>
                
                
                

            <div className="edu">
                <div class="edutitle1">내가 해야 할 </div>
                <div class="educircle1"></div><div class="edutitle2">화재 교육</div>
                <img className="img1" src="image/image 188.png"/>
                <div class="ing">진행중</div>
               </div>

            <div className="news">
            <div class="cross-container">
            <div class="cross-line"></div>
            <div class="cross-garo"></div>
            </div>
            <div class="tj1">결재문서</div>
            <div class="tj2">장비수리</div>
            <div class="tj3">기안서</div>
            <div class="tj4">장비구매</div>


            <img className="grahp" src="image/image 433.png"/>
                </div>
            </div>
        </div>
    );
}

export default Main;