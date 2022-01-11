import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import './landing.css';
import { Tabs, Tab } from 'react-bootstrap';
import FooterBar from "../../footer/Footer";
import RequestModals from "../../modals/Modals";
import Header from "../../header/header";
import { Carousel } from 'react-bootstrap';

function Landingpage() {
    const history = useHistory();
    // const [loginRegModal, setLoginRegModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
    const [confirmationModal, setConfirmationModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState([0, 0]);
    const stateRef = useRef(null);

    useEffect(
        () => {
            stateRef.current = { position, isDragging }
        },
        [position, isDragging],
    )

    useEffect(() => {
        function handleMouseMove(event) {
            // Now we read the dragging/position state from the
            // ref, which should always hold the latest state
            const { isDragging, position } = stateRef.current
            if (isDragging) {
                const newX = position[0] + event.movementX
                const newY = position[1] + event.movementY
                setPosition([newX, newY])
            }
        }
        window.addEventListener('mousemove', handleMouseMove)

        function handleMouseUp() {
            setIsDragging(false)
        }

        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    const userOptions = [
        {
            name: "Reception",
            image: "./icons/reception1.png",
            tabname: "Express check-out",
            cardColor: "#C4DFF6",
            option: "Food",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/reception",
            type: "Request Express check-out"
        },
        {
            name: "House Keeping",
            image: "./icons/reception2.png",
            tabname: "Wifi",
            cardColor: "#ECB731",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/housekeeping",
            type: "Request for wifi"
        },
        {
            name: "Room Dining",
            image: "./icons/reception3.png",
            tabname: "Towel",
            cardColor: "#8EC06C",
            option: "Food",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/store",
            type: "Request for extra towels"
        },
        {
            name: "Salon & Spa",
            image: "./icons/reception4.png",
            tabname: "Slippers",
            cardColor: "#8EC06C",
            option: "Food",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/spaandsalon",
            type: "Request for Slippers"
        },
        {
            name: "Accessories",
            image: "./icons/reception5.png",
            cardColor: "#B4A996",
            tabname: "Clean room",
            option: "Food",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/acceessories",
            type: "Request for Cleaning Rooms"

        },
        {
            name: "Report an issue",
            image: "./icons/reception2.png",
            cardColor: "#C4DFF6",
            option: "Food",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/reportissues"
        },
        {
            name: "Vallet",
            image: "./icons/reception2.png",
            cardColor: "#C4DFF6",
            option: "Food",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/reportissues"
        },
        {
            name: "Request",
            image: "./icons/reception2.png",
            cardColor: "#C4DFF6",
            option: "Food",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/reportissues"
        },
        {
            name: "Travel Desk",
            image: "./icons/reception2.png",
            cardColor: "#C4DFF6",
            option: "Food",
            foodName: "Chicken biryani",
            time: "30 mins",
            cost: "300",
            foodimage: "./icons/food-items.png",
            route: "/reportissues"
        }
    ]

    const clickOnItem = (item) => {
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.name }
        })
    }

    // const allTabledata = () => {
    //     setItems(userOptions)
    // }

    // const loadMoredata = () => {
    //     allTabledata()
    //     setLimit(limit + 3)
    // }

    // useEffect(() => {
    //     allTabledata()
    // })

    return (
        <>
            <Header />
            <div className="p-4" style={{ background: "rgb(242, 244, 248)" }}>
                <div className="room-no mb-2" style={{ paddingLeft: "0px" }}>Room No #101</div>
                <div className="row">
                    <div className="calender-btn p-1 d-flex">
                        <div className="d-flex col-6" style={{ padding: "10px", color: "#AAAAAA" }}>
                            <i className="far fa-calendar-alt fa-2x"></i>
                            <div className="calender-date">
                                5th Nov 2021<br />
                                <div className="calender-day">Friday</div>
                            </div>
                        </div>
                        <div className="borderLine"></div>
                        <div className="d-flex col-6" style={{ padding: "10px", color: "#AAAAAA" }}>
                            <i className="far fa-calendar-alt fa-2x"></i>
                            <div className="calender-date">
                                5th Nov 2021<br />
                                <div className="calender-day">Friday</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 border-bottom">
                <div className="requests-text">Frequent Requests</div>
                <div className="d-flex pb-2 my-4 landing-scroll-request-x">
                    {
                        userOptions.map((item, index) =>
                            <div>
                                {
                                    item.tabname ? <div key={index} style={{ marginRight: "5px" }}
                                        className="cursor-pointer col-2 h-100 text-center requests-btn "
                                        onClick={() => setConfirmationModal({ modal: true, modalType: item.tabname, type: item.type, details: '' })}
                                    >
                                        {item.tabname}
                                    </div>
                                        :
                                        null
                                }
                            </div>
                        )
                    }
                </div>

                {/* <div className="chat-text"
                    onClick={() => setConfirmationModal({ modal: true, modalType: '', type: '', details: '' })}
                >Chat</div> */}
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center mb-3">
                        <img src="./icons/user.svg" width="18px" height="24px" />
                        <span className="user-text">I want,</span>
                    </div>

                    <div
                        style={{
                            position: 'relative',
                            left: position[0],
                            top: position[1],
                            zIndex: "2"
                        }}
                        onMouseDown={() => setIsDragging(true)}
                    >
                        {isDragging ?
                            <div className="chat-box cursor-pointer"
                                onClick={(e) => {
                                    history.push({
                                        pathname: `/chat`,
                                        state: {
                                            data: "chat"
                                        }
                                    }
                                    )
                                }}
                            >
                                <i className="far fa-comment-alt"
                                ></i>
                            </div>

                            :

                            <div className="chat-box cursor-pointer"
                                onClick={(e) => {
                                    history.push({
                                        pathname: `/chat`,
                                        state: {
                                            data: "chat"
                                        }
                                    }
                                    )
                                }}
                            >
                                <i className="far fa-comment-alt"
                                ></i>
                            </div>
                        }
                    </div>
                </div>

                <div className="d-flex">
                    <div className="row">
                        {
                            userOptions.map((item, index) =>
                                <div className="col-4 mb-3 cursor-pointer">
                                    <div className="card p-2 h-100 items-cards"
                                        onClick={() => clickOnItem(item, index)}
                                        style={{ background: item.cardColor }}>
                                        <div className="card-header-text mb-4 text-truncate">{item.name}</div>
                                        <div className="d-flex justify-content-end">
                                            <img src={item.image} width="50" className="image-position" height="30" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{ fontSize: "10px" }} className="mb-4">
                    <Tab eventKey="home" className="" title="IRD Menu">
                        <div className="row">
                            {
                                userOptions.map((item, index) =>
                                    <div key={index} className="col-6 mb-3">
                                        <div className="card" style={{ borderRadius: "14px" }}>
                                            <img src="./icons/food-items.png" className="card-img-top" alt="food-item" />
                                            <div className="card-body p-0">
                                                <div className="p-2">
                                                    <p className="mb-2 food-item-name">{item.foodName}</p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="mb-2 time-text"><i className="far fa-clock" style={{ marginRight: "5px" }}></i>{item.time}</p>
                                                        <p className="mb-2 cost-text"> &#8377; {item.cost}</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center mx-0">
                                                    <div className="col-4 text-center"
                                                        style={{ background: "#FAD244", fontSize: "20px", borderBottomLeftRadius: "11px" }}
                                                    // onClick={handleDecrement}
                                                    >-</div>
                                                    <div className="col-4 text-center" style={{ fontSize: "20px" }}>
                                                        0
                                                        {/* {
                                                                parkingCount <= 0 ? 0 : parkingCount
                                                            } */}
                                                    </div>
                                                    <div className="col-4 text-center"
                                                        style={{ background: "#FAD244", fontSize: "20px", borderBottomRightRadius: "11px" }}
                                                    // onClick={handleIncrement}
                                                    >+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="d-flex justify-content-center">
                            {/* {
                                items.length <= limit ? null : */}
                            <div className="see-more-button cursor-pointer"
                                onClick={(e) => {
                                    history.push({
                                        pathname: `/dining`,
                                        state: {
                                            data: "dining"
                                        }
                                    }
                                    )
                                }}
                            // onClick={() => loadMoredata()}
                            >See more</div>
                            {/* } */}
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Buy Products">
                        <div className="row">
                            {
                                userOptions.map((item, index) =>
                                    <div key={index} className="col-6 mb-3">
                                        <div className="card" style={{ borderRadius: "14px" }}
                                            onClick={(e) => {
                                                history.push({
                                                    pathname: `/product`,
                                                    state: {
                                                        data: "product"
                                                    }
                                                }
                                                )
                                            }}
                                        >
                                            <img src="./icons/food-items.png" className="card-img-top" alt="food-item" />
                                            <div className="card-body p-0">
                                                <div className="p-2">
                                                    <p className="mb-2 food-item-name">{item.foodName}</p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="mb-2 time-text"><i className="far fa-clock" style={{ marginRight: "5px" }}></i>{item.time}</p>
                                                        <p className="mb-2 cost-text"> &#8377; {item.cost}</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center mx-0">
                                                    <div className="col-4 text-center"
                                                        style={{ background: "#FAD244", fontSize: "20px", borderBottomLeftRadius: "11px" }}
                                                    // onClick={handleDecrement}
                                                    >-</div>
                                                    <div className="col-4 text-center" style={{ fontSize: "20px" }}>
                                                        0
                                                        {/* {
                                                                parkingCount <= 0 ? 0 : parkingCount
                                                            } */}
                                                    </div>
                                                    <div className="col-4 text-center"
                                                        style={{ background: "#FAD244", fontSize: "20px", borderBottomRightRadius: "11px" }}
                                                    // onClick={handleIncrement}
                                                    >+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Service directory">
                        345tgfdsaxdf56
                    </Tab>
                </Tabs>

                <div className="landing-scroll-request-x  featured mb-4 mt-4">
                    <Carousel fade>
                        <Carousel.Item>
                            <div className="d-flex">
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <div className="p-3">
                                        <div className="feature-text mb-2" style={{ paddingLeft: "6px" }}>
                                            Featured
                                        </div>
                                        <div className="feature-desc mb-2" style={{ paddingLeft: "6px" }}>
                                            Explore A Variety Of Homestyle Meals!
                                        </div>
                                        <button className="try-now-btn cursor-pointer" style={{ marginLeft: "10px", padding: "7px" }}>Try Now</button>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <img
                                        style={{ borderRadius: "10px", height: "130px" }}
                                        className="d-block image-radius"
                                        src="./icons/property7.jpg"
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                            <Carousel.Caption className="pt-0">
                                <h6 style={{ position: "relative", top: "-120px", left: "-120px" }}>1/4</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex">
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <div className="p-3">
                                        <div className="feature-text mb-2" style={{ paddingLeft: "6px" }}>
                                            Featured
                                        </div>
                                        <div className="feature-desc mb-2" style={{ paddingLeft: "6px" }}>
                                            Explore A Variety Of Homestyle Meals!
                                        </div>
                                        <button className="try-now-btn cursor-pointer" style={{ marginLeft: "10px", padding: "7px" }}>Try Now</button>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <img
                                        style={{ borderRadius: "10px", height: "130px" }}
                                        className="d-block image-radius"
                                        src="./icons/property8.jpg"
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                            <Carousel.Caption className="pt-0">
                                <h6 style={{ position: "relative", top: "-120px", left: "-120px" }}>1/4</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex">
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <div className="p-3">
                                        <div className="feature-text mb-2" style={{ paddingLeft: "6px" }}>
                                            Featured
                                        </div>
                                        <div className="feature-desc mb-2" style={{ paddingLeft: "6px" }}>
                                            Explore A Variety Of Homestyle Meals!
                                        </div>
                                        <button className="try-now-btn cursor-pointer" style={{ marginLeft: "10px", padding: "7px" }}>Try Now</button>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <img
                                        style={{ borderRadius: "10px", height: "130px" }}
                                        className="d-block image-radius"
                                        src="./icons/property9.jpg"
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                            <Carousel.Caption className="pt-0">
                                <h6 style={{ position: "relative", top: "-120px", left: "-120px" }}>1/4</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    {/* <div className="d-flex align-items-center">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="p-3">
                                <div className="feature-text mb-2" style={{ paddingLeft: "6px" }}>
                                    Featured
                                </div>
                                <div className="feature-desc mb-2" style={{ paddingLeft: "6px" }}>
                                    Explore A Variety Of Homestyle Meals!
                                </div>
                                <button className="try-now-btn" style={{ marginLeft: "10px" }}>Try Now</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="./icons/food.png" className="" style={{ marginRight: "30px" }} alt="food-emun" />
                        </div>
                    </div> */}
                </div>

                <div className="">
                    <div className="pb-3 amenities">Amenities</div>
                    <div className="landing-scroll-request-x pb-3">
                        <div className="d-flex">
                            <div className="col-sm-12 col-md-4 col-lg-4" style={{ marginRight: "4px" }}
                                onClick={() => setConfirmationModal({ modal: true, modalType: 'Gym', type: 'Amenities', details: '' })}
                            >
                                <div className="border p-4 roundedCircle">
                                    <i className="fas fa-dumbbell fa-2x"></i>
                                    {/* <i className="fas fa-sliders-h"></i> */}
                                </div>
                                <br />
                                <button className="btn aminities-btn">Gym</button>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4" style={{ marginRight: "4px" }}
                                onClick={() => setConfirmationModal({ modal: true, modalType: 'Pool', type: 'Amenities', details: '' })}
                            >
                                <div className="border p-4 roundedCircle">
                                    <i className="fas fa-swimmer fa-2x"></i>
                                </div>
                                <br />
                                <button className="btn aminities-btn">Pool</button>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4" style={{ marginRight: "4px" }}
                                onClick={() => setConfirmationModal({ modal: true, modalType: 'Washroom', type: 'Amenities', details: '' })}
                            >
                                <div className="border p-4 roundedCircle">
                                    <i className="fas fa-bath fa-2x"></i>
                                </div>
                                <br />
                                <button className="btn aminities-btn">Washroom</button>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4" style={{ marginRight: "4px" }}
                                onClick={() => setConfirmationModal({ modal: true, modalType: 'Laundru', type: 'Amenities', details: '' })}
                            >
                                <div className="border p-4 roundedCircle">
                                    <i className="fas fa-tshirt fa-2x"></i>

                                </div>
                                <br />
                                <button className="btn aminities-btn">Laundry</button>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4" style={{ marginRight: "4px" }}
                                onClick={() => setConfirmationModal({ modal: true, modalType: 'Elevator', type: 'Amenities', details: '' })}
                            >
                                <div className="border p-4 roundedCircle">
                                    <i className="fas fa-stream fa-2x"></i>
                                    {/* <i className="far fa-lightbulb"></i> */}
                                </div>
                                <br />
                                <button className="btn aminities-btn">Elevator</button>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4" style={{ marginRight: "4px" }}
                                onClick={() => setConfirmationModal({ modal: true, modalType: 'Mini bar', type: 'Amenities', details: '' })}
                            >
                                <div className="border p-4 roundedCircle">
                                    <i className="fas fa-wine-bottle fa-2x"></i>
                                </div>
                                <br />
                                <button className="btn aminities-btn">Mini bar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <RequestModals
                    setConfirmationModal={(doc) => setConfirmationModal(doc)}
                    show={confirmationModal.modal}
                    onHide={() => setConfirmationModal({ modal: false, modalType: '', type: '', details: {} })}
                    params={confirmationModal}
                />
            </div>
            <FooterBar />
        </>
    );
}

export default Landingpage;

