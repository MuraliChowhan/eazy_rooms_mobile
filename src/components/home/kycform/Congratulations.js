import './kycform.css';
import { useHistory } from "react-router-dom";
function Congratulations() {
    const history = useHistory();
    return (
        <>
            <div className="p-4">
                <div className="d-flex justify-content-center mb-5">
                    <img src="./icons/congrats.gif" alt="small_logo" style={{ width: "200px", marginTop: "0px" }} />
                </div>

                {/* <div className="d-flex justify-content-center mb-3 mt-5">
                <i className="far fa-check-circle text-success fa-2x"></i>
            </div> */}

                <div className="congrats mb-3">
                    Congratulations
                </div>

                <div className="message mb-3">
                    You have successfully created your account
                </div>
                <button className="btn custom-buttons mb-2"
                    onClick={(e) => {
                        history.push({
                            pathname: `/home`,
                            state: {
                                data: "home"
                            }
                        }
                        )
                    }}
                >GET STARTED</button>
            </div>
        </>
    );
}

export default Congratulations;
