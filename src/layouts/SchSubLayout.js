import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import SchNavbar from "../components/common/SchNavbar";
import Footer from "../components/common/Footer";

function SchSubLayout() {

    return (
        <>  
            <SchNavbar/>
            <Outlet/>
        
        </>
    );
}

export default SchSubLayout;