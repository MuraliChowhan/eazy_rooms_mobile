import './notification.css';
import { useHistory } from "react-router-dom";
function Notification() {
    const history = useHistory();
    return (
        <>
            <div className="d-flex justify-content-between p-4 pb-3 border-bottom" style={{ background: "rgba(59, 114, 237, 0.5)" }}>
                <nav aria-label="breadcrumb">
                    <i className="fas fa-times"  style={{ color: "#fff", cursor:"pointer" }}
                        onClick={() => history.goBack()}
                    ></i>
                    <ol className="breadcrumb breadcrumb-text">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item"><a>My Account</a></li>
                        <li className="breadcrumb-item">Notifications</li>
                    </ol>
                </nav>
            </div>

            <div className="p-3" style={{ background: "rgb(249 249 249)" }}>
                <div className="noti-card mb-3">
                    <div className="d-flex" style={{ padding: "10px", paddingTop: "10px", color: "#AAAAAA" }}>
                        <div style={{
                            background: "#F5F5F5", width: "50px", height: "50px",
                            textAlign: "center", borderRadius: "50px", color: "#000", fontSize: "20px", paddingTop: "10px", fontWeight: "bold"
                        }}>%</div>
                        <div className="calender-date">
                            <span> Get 50% off</span>
                            <br />
                            <div style={{ fontSize: "12px", fontWeight: "400" }}>Lerem pisum doler ishsd ere</div>
                        </div>
                    </div>
                </div>
                <div className="noti-card mb-3">
                    <div className="d-flex" style={{ padding: "10px", paddingTop: "10px", color: "#AAAAAA" }}>
                        <div style={{
                            background: "#F5F5F5", width: "50px", height: "50px",
                            textAlign: "center", borderRadius: "50px", color: "#000", fontSize: "20px", paddingTop: "10px", fontWeight: "bold"
                        }}>%</div>
                        <div className="calender-date">
                            <span> Get 50% off</span>
                            <br />
                            <div style={{ fontSize: "12px", fontWeight: "400" }}>Lerem pisum doler ishsd ere</div>
                        </div>
                    </div>
                </div> <div className="noti-card mb-3">
                    <div className="d-flex" style={{ padding: "10px", paddingTop: "10px", color: "#AAAAAA" }}>
                        <div style={{
                            background: "#F5F5F5", width: "50px", height: "50px",
                            textAlign: "center", borderRadius: "50px", color: "#000", fontSize: "20px", paddingTop: "10px", fontWeight: "bold"
                        }}>%</div>
                        <div className="calender-date">
                            <span> Get 50% off</span>
                            <br />
                            <div style={{ fontSize: "12px", fontWeight: "400" }}>Lerem pisum doler ishsd ere</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
