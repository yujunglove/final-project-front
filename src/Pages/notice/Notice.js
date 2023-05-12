import NoticeCSS from './Notice.module.css';


function Notice() {
    return(
        <div className={NoticeCSS}>
            <div className={NoticeCSS.content}>
                <div className={NoticeCSS.noticeTitle}>
                    공지사항!
                </div>
                <div className={NoticeCSS.square}>
                    <div className={NoticeCSS.tableInfo}>
                        게시물 100000 개 || 페이지 1/1000
                    </div>

                    <table className={NoticeCSS.noticeMainTable}>
                        <tr className={NoticeCSS.title}>
                            <th>글번호</th>
                            <th>부서</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>
                        <tr className={NoticeCSS.lists}>
                            <th>00100</th>
                            <th>인사부</th>
                            <th>인사를 잘 합시다.</th>
                            <th>2023-05-11</th>
                            <th>1000</th>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Notice;