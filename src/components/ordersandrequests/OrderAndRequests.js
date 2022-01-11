import './OrderAndRequests.css';
import { useHistory } from "react-router-dom";
import Header from '../header/header';

function OrderAndRequests() {
    const history = useHistory();
    const product = [
        {
            name: "Fish fry",
            image: "./icons/property7.jpg",
            desc: "Lorem ipsum doler sameth",
            orderType: "Request"
        },
        {
            name: "Fish fry",
            image: "./icons/property9.jpg",
            desc: "Lorem ipsum doler sameth",
            orderType: "Request"
        },
        {
            name: "Fish fry",
            image: "./icons/property8.jpg",
            desc: "Lorem ipsum doler sameth",
            orderType: "Request"
        }
    ]
    return (
        <>
            <Header />

            <div className="p-3" style={{ background: "rgb(249 249 249)" }}>
                <div className="feature-text mb-3 d-flex">
                    <img src="./icons/arrow-left.png"
                        className="cursor-pointer"
                        width="18px" height="18px"
                        style={{ marginRight: "10px" }}
                        onClick={() => history.goBack()}
                    />
                    Orders</div>
                {
                    product.map((item, index) =>
                        <div key={index} className="noti-card mb-3">
                            <div className="d-flex justify-content-between" style={{ padding: "10px", paddingTop: "10px", color: "#AAAAAA" }}>
                                <div className="d-flex">
                                    <img src={item.image} className="rounded" width="80px" height="80px" />
                                    <div className="calender-date">
                                        <div style={{ fontSize: "10px", color: "#727272", fontWeight: "400" }}>{item.orderType}</div>
                                        <span>{item.name}</span>
                                        <br />
                                        <div className="mb-2" style={{ fontSize: "12px", fontWeight: "400" }}>{item.desc}</div>
                                        <div className="confirm-button text-truncate">Waiting for confirmation</div>
                                    </div>
                                </div>
                                <div className>
                                    <i className="far fa-comment-alt cursor-pointer"
                                        onClick={(e) => {
                                            history.push({
                                                pathname: `/chat`,
                                                state: {
                                                    data: "chat"
                                                }
                                            }
                                            )
                                        }}
                                    ></i>
                                    <div className="mt-2 item-cost">$300</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default OrderAndRequests;
