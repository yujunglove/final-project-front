import { Outlet } from "react-router-dom";
import MemberHeader from "../components/common/MemberHeader";

function MemberSubLayout() {

    return (
    <>
        <MemberHeader/>
        <Outlet/>
    </>
    )
}

export default MemberSubLayout;