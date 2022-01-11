import './auth.css';
import { useHistory } from "react-router-dom";
function Login() {
    const history = useHistory();
    return (
        <>
            <div className="d-flex justify-content-center mb-3">
                <img src="./icons/small_logo.png" alt="small_logo" style={{ marginTop: "50px" }} />
            </div>
            <div className="d-flex justify-content-center greeting-text mb-2">
                Welcome!
            </div>
            <div className="d-flex justify-content-center verify-text pb-2 border-bottom">
                Pleas, Sign in to your account
            </div>
            <div className="d-flex justify-content-center sign-in-text">
                <div className="mt-4 pt-2 mb-2">
                    SIGN IN
                </div>
            </div>
            <div className="mb-4 p-4">
                <div className="form-group mb-">
                    <div className="input-group border formborder-color rounded mb-4">
                        <input type="text" className="form-control border-0" placeholder="Mobile number" />
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon2">
                                <i className="fas fa-mobile-alt mt-1"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <button className="btn custom-buttons mb-2"
                    onClick={(e) => {
                        history.push({
                            pathname: `/Otpverification`,
                            state: {
                                data: "OTP"
                            }
                        }
                        )
                    }}
                >SUBMIT</button>
                <div className="d-flex justify-content-end">
                    <div className="need-help-text cursor-pointer">Need help</div>
                </div>
            </div>

        </>
    );
}

export default Login;
