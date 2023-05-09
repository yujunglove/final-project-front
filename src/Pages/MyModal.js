import React, { useState } from 'react';

function MyPage() {
  const [isModalOpen, setModalOpen] = useState(false); // 모달 상태를 관리합니다.

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>

      {isModalOpen && (
        <MyModal onClose={closeModal}>
          {/* 모달 내용 */}
          <h3>모달 내용</h3>
          <p>이곳에 모달의 내용을 작성합니다.</p>
        </MyModal>
      )}
    </div>
  );
}

export default MyPage;
