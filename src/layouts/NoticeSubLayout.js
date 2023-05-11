import { Outlet } from "react-router-dom";
import NoticeNavbar from "../components/common/NoticeNavbar";

function NoticeSubLayout() {

    return (
        <>  
            <NoticeNavbar/>
            <Outlet/>
        
        </>
    );
}

export default NoticeSubLayout;