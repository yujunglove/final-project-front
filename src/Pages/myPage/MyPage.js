import MyPageCSS from '../../components/main/MyPage.css';
import React, { useState, useEffect } from 'react';
import { callMyPageAPI, callGoToWorkAPI, callEndWorkAPI } from '../../apis/MyPageAPICalls';
import { useDispatch, useSelector } from 'react-redux';


const getDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  const day = ("0" + newDate.getDate()).slice(-2);
  return `${year}-${month}-${day}`
}

function MyPage() {
  const dispatch = useDispatch();

  //useSelector를 사용해서 화면에 데이터를 보여주기 
  // 추가적으로 지금 여러 리듀서가 있어서 만든 리듀서만 가져오도록 한 로직
  const {totalMemberCount, time} = useSelector(state => state.myPageReducer);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    dispatch(callMyPageAPI())
  }, [])

  const date = new Date(time)
  const goToWorkDate = getDate(date)
  const goToWorkTime = `${date.getHours()}:${date.getMinutes()}`

  const endWorkDate = getDate(date)
  const endWorkTime = `${date.getHours()}:${date.getMinutes()}`

  const openModal = (modalIndex) => {
    setActiveModal(modalIndex);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleWorknClick = () => {
    dispatch(callGoToWorkAPI({id: 5}))
  }

  const handleEndOnClick = () => {
    dispatch(callEndWorkAPI({id: 5}))
  }


    return (
        <div className={MyPageCSS}>
            <div className="employeetitle">
                <div class="employeeStatus">
                Strato 직원 현황
                </div>
                <div class="employeeAll">
                전체 직원: {totalMemberCount}명
                </div>

                <div class="Explanation">
                자신의 업무에 맞게 필요한 직원을 검색하고 확인해 보세요!<br/>
                스카이리프트는 빠르게 직원을 검색하고 찾을 수 있습니다.
                </div>
                <div class="work">
                <div class="workTitle" onClick={handleWorknClick}>
                    출근하기
                </div>
                <img className="workImg" src="image/image 416.png"/>
                <div class="workNemo">
                   <div class="workNemoTitle1">{endWorkDate}</div> 
                   <div class="workNemoTitle2">{endWorkTime}</div> 
                    
                </div>
            </div>

            <div class="getoffwork">
                <div class="getoffworkTitle" onClick={handleEndOnClick}>
                    퇴근하기
                </div>
                <img className="getoffworkImg" src="image/image 418.png"/>
                <div class="getoffworkNemo">
                <div class="workNemoTitle1">{goToWorkDate}</div> 
                   <div class="workNemoTitle2">{goToWorkTime}</div> 
                    
                </div>
            </div>

            <div class="going">
                <div class="outTitle">
                    외출  /
                </div>
                
                <div class="comeTitle">
                    복귀
                </div>
                <img className="goingImg" src="image/image 419.png"/>
                <div class="goingNemo">
                   <div class="returnTitle1">2023-05-01</div> 
                   <div class="returnTitle2">16:53<br/><br/><br/> ~</div> 
                <div class="outTitle1">2023-05-01</div> 
                   <div class="outTitle2">16:53</div> 
                    
                </div>
            </div>

            </div>
            <div class="employeeMyPage">
                <div class="info">
                    기본 정보
                </div>
                <div class="modi modal-button" onClick={() => openModal(1)}>
                    수정
                </div>
                <div class="vy">
                
                <div class="table">

<table>
  <tr>
    <th>이름</th>
    <td>John Doe</td>
    <th>성별</th>
    <td>남성</td>
  </tr>
  <tr>
    <th>생년월일</th>
    <td>1980-01-01</td>
    <th>급여 계좌</th>
    <td>1234-5678-9012</td>
  </tr>
  <tr>
    <th>휴대폰 번호</th>
    <td>010-1234-5678</td>
    <th>부서</th>
    <td>영업부</td>
  </tr>
  <tr>
    <th>입사년월일</th>
    <td>2022-01-01</td>
    <th>직급</th>
    <td>대리</td>
  </tr>
  <tr>
    <th rowspan="2">주소</th>
    <td rowspan="2">서울시 강남구</td>
    <th>상태</th>
    <td>재직</td>
  </tr>
  <tr>
    <th>근속 기간</th>
    <td>2년</td>
  </tr>
</table>
                </div>

                </div>
            </div>

            <div className="modalButton">

      <div className="modal-button">
        {activeModal === 1 && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <h2>기본 정보 수정하기</h2>
              <h5>수정이 안되는 정보는 인사관리자를 통해서 수정 가능합니다.</h5>
                             
                <div class="table2">

                <table>
                <tr>
                    <th>이름</th>
                    <td>John Doe</td>
                    <th>성별</th>
                    <td>남성</td>
                </tr>
                <tr>
                    <th>생년월일</th>
                    <td>1980-01-01</td>
                    <th>급여 계좌</th>
                    <td>1234-5678-9012</td>
                </tr>
                <tr>
                    <th>휴대폰 번호</th>
                    <td>010-1234-5678</td>
                    <th>부서</th>
                    <td>영업부</td>
                </tr>
                <tr>
                    <th>입사년월일</th>
                    <td>2022-01-01</td>
                    <th>직급</th>
                    <td>대리</td>
                </tr>
                <tr>
                    <th rowspan="2">주소</th>
                    <td rowspan="2">서울시 강남구</td>
                    <th>상태</th>
                    <td>재직</td>
                </tr>
                <tr>
                    <th>근속 기간</th>
                    <td>2년</td>
                </tr>
                </table>
                </div>
                <div class="modiFianl">
                    수정완료
                </div>
            </div>
          </div>
        )}
        </div>
</div>
            </div>
    
    );
}

export default MyPage;