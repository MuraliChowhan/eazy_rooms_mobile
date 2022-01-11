import './kycform.css';
import { useHistory } from "react-router-dom";

function KycForm() {
    const history = useHistory();
    return (
        <>
            <div className="d-flex justify-content-center">
                <img src="./icons/small_logo.png" alt="small_logo" style={{ marginTop: "20px" }} />
            </div>

            <div className="p-4 pb-0">
                <div className="mb-3">
                    <label className="custom-form-lables mb-2">Add your info</label>
                    <div className="border formborder-color rounded">
                        <input type="text" className="form-control border-bottom border-0" placeholder="First name" />
                        <input type="text" className="form-control border-0" placeholder="Last name" />
                    </div>
                    <span style={{ fontSize: "10px" }}>Enter the name on your government id card</span>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="">
                    <input type="number" className="form-control" placeholder="Number" />
                </div>
            </div>
            <div className="p-4">
                <div className="emergency-detalis pb-2">
                    Emergency contact details
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Mobile number" />
                </div>
                <button className="btn custom-buttons mb-2"
                    onClick={(e) => {
                        history.push({
                            pathname: `/uploadimage`,
                            state: {
                                data: "OTP"
                            }
                        }
                        )
                    }}
                >NEXT</button>
            </div>
        </>
    );
}

export default KycForm;
