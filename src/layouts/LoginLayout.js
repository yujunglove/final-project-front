import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import LoginBackground from "../components/login/LoginBackground";

function LoginLayout() {

    return (
        <>  
            <LoginBackground/>
            <Outlet/>
        
        </>
    );
}

export default LoginLayout;