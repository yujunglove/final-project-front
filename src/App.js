import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import MyPage from "./pages/myPage/MyPage";
import SubLayout from "./layouts/SubLayout";
import Document from "./pages/myPage/Document";
import NoticeSubLayout from "./layouts/NoticeSubLayout";
import Notice from "./pages/notice/Notice";
import NoticePart from "./pages/notice/NoticePart";
import NoticeStatus from "./pages/notice/NoticeStatus";
import NoticeManage from "./pages/notice/manage/NoticeManage";
import NoticePartManage from "./pages/notice/manage/NoticePartManage";
import NoticeStatusManage from "./pages/notice/manage/NoticeStatusManage";
import ApprovalSubLayout from "./layouts/ApprovalSubLayout";
import Approval from "./pages/approval/Approval";
import ApprovalRegist from "./pages/approval/ApprovalRegist";
import ApprovalWait from "./pages/approval/ApprovalWait";
import ApprovalInProgress from "./pages/approval/ApprovalInProgress";
import ApprovalAccessed from "./pages/approval/ApprovalAccessed";
import ApprovalReturned from "./pages/approval/ApprovalReturned";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/myPage" element={<SubLayout />}>
            <Route index element={<MyPage />} />
            <Route path="/myPage/Document" element={<Document />} />

          </Route>
          <Route path="/notice" element={<NoticeSubLayout />}>
            <Route index element={<Notice />} />
            <Route path="/notice/part" element={<NoticePart />} />
            <Route path="/notice/status" element={<NoticeStatus />} />
          </Route>
          <Route path="/notice-manage" element={<NoticeSubLayout />}>
            <Route index element={<NoticeManage />} />
            <Route path="/notice-manage/part" element={<NoticePartManage />} />
            <Route path="/notice-manage/status" element={<NoticeStatusManage />} />
          </Route>
          <Route path="/approval" element={<ApprovalSubLayout />}>
            <Route index element={<Approval />} />
            <Route path="/approval/regist" element={<ApprovalRegist />} />
            <Route path="/approval/wait" element={<ApprovalWait />} />
            <Route path="/approval/inProgress" element={<ApprovalInProgress />} />            
            <Route path="/approval/accessed" element={<ApprovalAccessed />} />
            <Route path="/approval/returned" element={<ApprovalReturned />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;