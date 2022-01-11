import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useHistory } from "react-router-dom";
// import { NavItem } from 'react-bootstrap';
function Chat() {
    const history = useHistory();

    const chatData = [
        {
            img: "./icons/chatprofile.png",
            username: "Reception",
            desc: "lorem ipsum doler sameth",
            time: "02:22 PM"
        },
        {
            img: "./icons/chatprofile.png",
            username: "Reception",
            desc: "lorem ipsum doler sameth",
            time: "12:22 PM"
        },
        {
            img: "./icons/chatprofile.png",
            username: "Reception",
            desc: "lorem ipsum doler sameth",
            time: "07:22 PM"
        },
        {
            img: "./icons/chatprofile.png",
            username: "Reception",
            desc: "lorem ipsum doler sameth",
            time: "11:09 PM"
        },
        {
            img: "./icons/chatprofile.png",
            username: "Reception",
            desc: "lorem ipsum doler sameth",
            time: "12:42 PM"
        },
    ]

    return (
        <>
            <div className="p-4 pb-1">
                <i className="fas fa-times" style={{ cursor: "pointer" }}
                    onClick={() => history.goBack()}
                ></i>
            </div>
            <div className="d-flex justify-content-between align-items-center pt-0 p-4 pb-3 border-bottom" >
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-text mb-0">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item"><a>Chat</a></li>
                    </ol>
                </nav>
                <div className="chat-text">Chat</div>
            </div>

            <div className="p-3 cursor-pointer" style={{ background: "rgb(249 249 249)" }}>
                {
                    chatData.map((item, index) =>
                        <div key={index} className="noti-card mb-3"
                            onClick={(e) => {
                                history.push({
                                    pathname: `/chatconsole`,
                                    state: {
                                        data: "OTP"
                                    }
                                }
                                )
                            }}
                        >
                            <div className="d-flex" style={{ padding: "10px", paddingTop: "10px", color: "#AAAAAA" }}>
                                <img src={item.img} width="50px" height="50px" />
                                <div className="calender-date">
                                    <span>{item.username}</span>
                                    <br />
                                    <div style={{ fontSize: "12px", fontWeight: "400" }}>{item.desc}</div>
                                </div>

                                <div className="chat-time">{item.time}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Chat;
