import { useHistory } from "react-router-dom";
import './home.css';

function RequestPlaced() {
    const history = useHistory();
    return (
        <>
            <div className="p-4">
                <div className="d-flex justify-content-center mb-5">
                    <img src="./icons/email-confirmation-sent.gif" alt="small_logo" style={{ width: "200px", marginTop: "0px" }} />
                </div>

                {/* <div className="d-flex justify-content-center mb-3 mt-5">
                <i className="far fa-check-circle text-success fa-2x"></i>
            </div> */}

                <div className="email-confirmation mb-3">
                    Thanks for your requests
                </div>

                <div className="succesful-message mb-3">
                    Your request has been successfully placed.
                </div>

                <div className="email-sent-box p-3">
                    <button className="btn mb-2"
                        style={{ background: "#fff", width: "100%" }}
                        onClick={(e) => {
                            history.push({
                                pathname: `/orderandrequests`,
                                state: {
                                    data: "orderandrequests"
                                }
                            }
                            )
                        }}
                    >Go to order history</button>
                    <button className="btn back-to-home-btn mb-2"
                        onClick={(e) => {
                            history.push({
                                pathname: `/home`,
                                state: {
                                    data: "home"
                                }
                            }
                            )
                        }}
                    >Back to home</button>
                </div>

            </div>
        </>
    );
}

export default RequestPlaced;
