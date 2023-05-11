import { Outlet } from "react-router-dom";
import ApprovalNavbar from "../components/common/ApprovalNavbar";

function ApprovalSubLayout() {

    return (
        <>  
            <ApprovalNavbar/>
            <Outlet/>
        
        </>
    );
}

export default ApprovalSubLayout;