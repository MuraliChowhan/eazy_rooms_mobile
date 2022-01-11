import './Cart.css';
import { useHistory } from "react-router-dom";
import Header from '../header/header';

function Cart() {
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
                    Cart</div>
                {
                    product.map((item, index) =>
                        <div key={index} className="noti-card mb-3">
                            <div className="d-flex justify-content-between" style={{ padding: "10px", paddingTop: "10px", color: "#AAAAAA" }}>
                                <div className="col-8 d-flex">
                                    <img src={item.image} className="rounded" width="60px" height="60px" />
                                    <div className="calender-date">
                                        <span>{item.name}</span>
                                        <br />
                                        <div className="mt-2 item-cost mb-2">$300</div>
                                        <div style={{ fontSize: "11px", color: "#727272", fontWeight: "400" }}>Serves 2 persons</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="d-flex justify-content-end mb-3">
                                        <i className="far fa-times-circle cursor-pointer"></i>
                                    </div>
                                    <div className="d-flex border rounded align-items-center mx-0" style={{ width: "120%" }}>
                                        <div className="col-4 cursor-pointer text-center"
                                            style={{ background: "rgba(31, 59, 219, 0.2)", fontSize: "20px", borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px" }}
                                        // onClick={handleDecrement}
                                        >-</div>
                                        <div className="col-4 text-center" style={{ fontSize: "20px" }}>
                                            0
                                            {/* {
                                                                parkingCount <= 0 ? 0 : parkingCount
                                                            } */}
                                        </div>
                                        <div className="col-4 cursor-pointer text-center"
                                            style={{ background: "rgba(31, 59, 219, 0.2)", fontSize: "20px", borderBottomRightRadius: "5px", borderTopRightRadius: "5px" }}
                                        // onClick={handleIncrement}
                                        >+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="checkout-btn d-flex justify-content-between"
                    onClick={(e) => {
                        history.push({
                            pathname: `/thankyou`,
                            state: {
                                data: "thankyou"
                            }
                        }
                        )
                    }}
                >
                    <div className="checkout-text">
                        Checkout
                    </div>
                    <div className="checkout-item-cost">
                        $20.00
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
