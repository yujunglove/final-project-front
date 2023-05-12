import ApprovalCSS from './Approval.module.css';


function ApprovalReturned() {
    return(
        <div className={ApprovalCSS}>
            <div className={ApprovalCSS.content0}>
                전자결재 반려 문서함!
            </div>
        </div>
    );
}

export default ApprovalReturned;