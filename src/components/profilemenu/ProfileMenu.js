import React, { useState } from "react";
import "./ProfileMenu.css";
import { useHistory } from "react-router-dom";
function ProfileMenu() {
    const history = useHistory();
    const profileOptions = [
        {
            name: "Home",
            img: "./icons/House-svg.svg",
            route: "/home"
        },
        {
            name: "Notifications",
            img: "./icons/bell-svg.svg",
            route: "/notifications"
        },
        {
            name: "My Orders",
            img: "./icons/book-open-svg.svg",
            route: "/orderandrequests"

        },
    
        {
            name: "User Invoice",
            img: "./icons/clipboard-svg.svg",
            route: "/invoice"
        },
        {
            name: "Cart",
            img: "./icons/cart-svg.svg",
            route: "/cart"
        },
        {
            name: "Report an issue",
            img: "./icons/help-circle.svg",
            route: "/reportissue"
        },
        {
            name: "More",
            img: "./icons/dots-svg.svg",
            route: "/notifications"
        },
        {
            name: "Sign Out",
            img: "./icons/log-out-svg.svg",
            route: "/home"
        },
    ]
    const [activeStep, setActiveStep] = useState('Home');

    const sidebarClick = (item) => {
        setActiveStep(item.name);
        if (item.route === "Sign Out") {
            history.push({
                pathname: item.route
            })
        }
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.name }
        })
    }
    return (
        <>
            <div className="p-4">
                <img src="./icons/arrow-left.png"
                    className="cursor-pointer mb-3"
                    width="18px" height="18px"
                    onClick={() => history.goBack()}
                />
                <div className="d-flex justify-content-between align-items-center ">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item breadcrumb-text"><a>Home</a></li>
                            <li className="breadcrumb-item breadcrumb-text"><a>My Account</a></li>
                        </ol>
                    </nav>
                    <div className="edit-profile-tex cursor-pointer"
                        onClick={(e) => {
                            history.push({
                                pathname: `/edit`,
                                state: {
                                    data: "edit"
                                }
                            }
                            )
                        }}
                    >
                        Edit
                    </div>
                </div>

                <div className="row border-bottom mb-3">
                    <div className="col-sm-12 col-md-3 col-lg-3"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                        <div className="kv-avatar">
                            <img src="./icons/profile.png"
                                className="cursor-pointer"
                                width="78px"
                                height="78px" />
                            <label
                                for="upload-photo"
                                style={{ marginLeft: "-17px", position: "relative", paddingTop: "56px", top: "32px" }}>
                                <i className="far fa-edit"></i></label>
                            <input
                                type="file"
                                name="photo"
                                id="upload-photo" />
                        </div>
                        <div className="user-name">
                            Daniel christian
                        </div>
                        <div className="user-email-text pb-2">
                            daniel@gmail.com
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3"></div>
                </div>

                <div className="mb-">
                    <aside id="mySidebar" className="sidebar">
                        <ul className="list-group">
                            {
                                profileOptions.map((item, index) =>
                                    <li key={index} onClick={() => sidebarClick(item, index)}
                                        className={activeStep === item.name ? 'sidebar-active-tab custom-list-group-item border-0 d-flex mb-2 align-items-center flex-row bd-highlight' : 'mb-2 sidebar-texts sidebar-inactive-tab custom-list-group-item border-0 d-flex align-items-center flex-row bd-highlight'}
                                        data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <img src={item.img} style={{ marginRight: "2px" }} />
                                        <span className="profile-options-text" style={{ marginLeft: "8px" }}>{item.name}</span>
                                        {/* <i className="fas fa-caret-down"></i> */}
                                    </li>
                                )
                            }
                        </ul>
                    </aside>
                </div>
            </div>
        </>
    );
}

export default ProfileMenu;
