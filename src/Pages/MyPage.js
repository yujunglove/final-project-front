import MyPageCSS from "../components/main/MyPage.css";

function MyPage() {

  
    return (
        <div className={MyPageCSS}>
            <div style={{ display: "flex" }}>
            <div className="employeetitle">
                <div class="employeeStatus">
                Strato 직원 현황
                </div>
                <div class="employeeAll">
                전체 직원 : 24명
                </div>

                <div class="Explanation">
                자신의 업무에 맞게 필요한 직원을 검색하고 확인해 보세요!<br/>
                스카이리프트는 빠르게 직원을 검색하고 찾을 수 있습니다.
                </div>
            </div>
            </div>
            </div>
    
    );
}

export default MyPage;