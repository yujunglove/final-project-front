import MyPageCSS from "../components/main/MyPage.css";
import React, { useState } from 'react';

function MyPage() {
    const [activeModal, setActiveModal] = useState(null);
  
    const openModal = (modalIndex) => {
      setActiveModal(modalIndex);
    };
  
    const closeModal = () => {
      setActiveModal(null);
    };


    return (
        <div className={MyPageCSS}>
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
                <div class="work">
                <div class="workTitle">
                    출근하기
                </div>
                <img className="workImg" src="image/image 416.png"/>
                <div class="workNemo">
                   <div class="workNemoTitle1">2023-05-01</div> 
                   <div class="workNemoTitle2">16:53</div> 
                    
                </div>
            </div>

            <div class="getoffwork">
                <div class="getoffworkTitle">
                    퇴근하기
                </div>
                <img className="getoffworkImg" src="image/image 418.png"/>
                <div class="getoffworkNemo">
                   <div class="getoffworkTitle1">2023-05-01</div> 
                   <div class="getoffworkTitle2">16:53</div> 
                    
                </div>
            </div>

            <div class="going">
                <div class="goingTitle">
                    외출하기
                </div>
                <img className="goingImg" src="image/image 419.png"/>
                <div class="goingNemo">
                   <div class="goingTitle1">2023-05-01</div> 
                   <div class="goingTitle2">16:53</div> 
                    
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

            <div  className="vat modal-button" onClick={() => openModal(2)}>
                휴가신청
            </div>

            <div className=" vatwo modal-button" onClick={() => openModal(3)}>
                휴직신청
            </div>

            <div  className="fir modal-button" onClick={() => openModal(4)}>
                퇴직신청
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

        {activeModal === 2 && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <h3>휴가 신청</h3>
              <p>이곳에 모달 2의 내용을 작성합니다.</p>
            </div>
          </div>
        )}
{activeModal === 3 && (
  <div className="modal-overlay">
    <div className="modal-content1">
      <button className="modal-close" onClick={closeModal}>&times;</button>
      <h3>휴직 신청</h3>

      <form>
        <label htmlFor="name" style={{ marginLeft: "-120px",padding: "10px"}}>신청인 이름:</label>
        <input type="text" id="name" name="name" required style={{ backgroundColor: "lightgray", border: "none" }} /><br /><br />

        <label htmlFor="reason" style={{ marginLeft: "-280px"}}>신청사유:</label><br/>
        <textarea id="reason" name="reason" rows="15" cols="40" required style={{ backgroundColor: "lightgray", border: "none" }}></textarea><br />
        휴직 신청일<br></br>휴직 종료일<br></br>
        <button type="submit" style={{ backgroundColor: "rgb(209, 146, 236)", border: "none", color: "white", padding: "10px 20px", fontSize: "16px" , margin: "40px"}}>제출</button>
      </form>
    </div>
  </div>
)}


        {activeModal === 4 && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <h3>퇴직 신청</h3>
              <p>이곳에 모달 4의 내용을 작성합니다.</p>
            </div>
          </div>
        )}
      </div>
</div>
            </div>
    
    );
}

export default MyPage;

// import React, { useState } from 'react';

// function MyPage() {
//   const [activeModal, setActiveModal] = useState(null);

//   const openModal = (modalIndex) => {
//     setActiveModal(modalIndex);
//   };

//   const closeModal = () => {
//     setActiveModal(null);
//   };

//   return (
//     <div className="my-page">
//       {/* 이전 코드 생략 */}

//       <div className="modal-button">
//         <button className="modal-button" onClick={() => openModal(1)}>모달 1 열기</button>

//         <button className="modal-button" onClick={() => openModal(2)}>모달 2 열기</button>

//         <button className="modal-button" onClick={() => openModal(3)}>모달 3 열기</button>

//         <button className="modal-button" onClick={() => openModal(4)}>모달 4 열기</button>

//         {activeModal === 1 && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <button className="modal-close" onClick={closeModal}>&times;</button>
//               <h3>모달 1 내용</h3>
//               <p>이곳에 모달 1의 내용을 작성합니다.</p>
//             </div>
//           </div>
//         )}

//         {activeModal === 2 && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <button className="modal-close" onClick={closeModal}>&times;</button>
//               <h3>모달 2 내용</h3>
//               <p>이곳에 모달 2의 내용을 작성합니다.</p>
//             </div>
//           </div>
//         )}

//         {activeModal === 3 && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <button className="modal-close" onClick={closeModal}>&times;</button>
//               <h3>모달 3 내용</h3>
//               <p>이곳에 모달 3의 내용을 작성합니다.</p>
//             </div>
//           </div>
//         )}

//         {activeModal === 4 && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <button className="modal-close" onClick={closeModal}>&times;</button>
//               <h3>모달 4 내용</h3>
//               <p>이곳에 모달 4의 내용을 작성합니다.</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyPage;
