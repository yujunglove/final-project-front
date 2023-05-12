import NoticeCSS from './Notice.module.css';

function NoticeStatus() {
    return(
        <div className={NoticeCSS}>
            <div className={NoticeCSS.content}>
                공지사항 관리자 상태별 페이지!
            </div>
        </div>
    );
}

export default NoticeStatus;