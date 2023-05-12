import LoginCss from "../../components/login/Login.css";
import LoginForm from "../../components/form/Loginform";

function Login(){



    return(
        <div className="whiteBox">
            <div className="blueBox">
            <img className="stratoLogo" src="image/SkyLift.png"></img>
            <img className="cloudImg" src="image/cloud.png"></img>
            <img className="GroupwareImg" src="image/GroupwareImg.png"></img>
            </div>
            <div className="loginForm">
                <LoginForm/><br></br>
                <button 
                    style={ { border: 'none', margin: 0, fontSize: '10px', height: '20px', marginLeft: '33%',
                                marginTop: '5%', width: '15%', backgroundColor: "white"} }
                    // onClick={ onClickRegisterHandler }
                >
                    Id 찾기
                </button>
                <button
                    style={ { border: 'none', margin: 0, fontSize: '10px', height: '20px', width: '15%',marginLeft: '5%',
                                backgroundColor: "white"} }
                    // onClick={ onClickRegisterHandler }
                >
                    Pwd 찾기
                </button>
            </div>
        </div>
    );
};

export default Login;