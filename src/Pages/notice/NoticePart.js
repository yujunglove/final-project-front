import NoticeCSS from './Notice.module.css';

function NoticePart() {
    return(
        <div className={NoticeCSS}>
            <div className={NoticeCSS.content}>
                공지사항 부서별 페이지!!
            </div>
        </div>
    );
}

export default NoticePart;