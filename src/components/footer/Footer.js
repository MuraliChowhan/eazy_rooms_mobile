import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./footer.css";
import { Link } from 'react-router-dom';
function FooterBar() {
    const history = useHistory();
    const [activeStep, setActiveStep] = useState('Home')
    const footer = [
        {
            name: "Home",
            img: "./icons/home-svg.svg",
            route: "/home"
        },
        {
            name: "Category",
            img: "./icons/category-svg.svg",
            route: "/profile"
        },
        {
            name: "Order",
            img: "./icons/clock-svg.svg",
            route: "/orderandrequests"
        },
        {
            name: "Cart",
            img: "./icons/cart-svg.svg",
            route: "/cart"
        },
        {
            name: "My account",
            img: "./icons/user-svg.svg",
            route: "/profile"
        }
    ]

    const sidebarClick = (item) => {
        setActiveStep(item.name)
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.name }
        })
    }

    return (
        <>
            <div className="p-3">
                <div className="d-flex justify-content-between">
                    {
                        footer.map((item, index) =>
                            <div key={index} className="text-center cursor-pointer"
                                onClick={() => sidebarClick(item, index)}>
                                <img src={item.img} width="25px" height="25px" />
                                <div className="footer-heading">{item.name}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default FooterBar;
