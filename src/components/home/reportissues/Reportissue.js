import React, { useEffect, useState } from "module";
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import FooterBar from "../../footer/Footer";
import './reportissue.css';

function ReportIssue() {
    const history = useHistory();
    // const [items, setItems] = useState([]);
    // const [limit, setLimit] = useState(3);

    const reportissues = [
        {
            icon: "fas fa-bath",
            name: "Washroom"
        },
        {
            icon: "fas fa-bug",
            name: "Insects"
        },
        {
            icon: "fas fa-bug",
            name: "Kitchen"
        },
        {
            icon: "fas fa-border-all",
            name: "Hall"
        },
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
            <div className="p-4 pb-2">
                <img src="./icons/arrow-left.png"
                    className="cursor-pointer"
                    width="18px" height="18px"
                    onClick={() => history.goBack()}
                />
            </div>

            <div className="d-flex justify-content-between pt-0 border-bottom">
                <div className="p-4 pt-0 pb-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-text">
                            <li className="breadcrumb-item"><a>Home</a></li>
                            <li className="breadcrumb-item"><a>My Account</a></li>
                            <li className="breadcrumb-item">Report an issue</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="p-4">
                <div className="d-flex landing-scroll-x mb-4">
                    {
                        reportissues.map((item, index) =>
                            <div key={index} style={{ marginRight: "6px" }} className="col-sm-12 col-md-4 col-lg-4 mb-2 cursor-pointer">
                                <div className="card p-2 h-100 items-cards">
                                    <div className="d-flex justify-content-center">
                                        <i className={item.icon} style={{ color: "rgb(6 104 143)", fontSize: "30px", padding: "15px" }} />
                                    </div>
                                    <div className="text-center" style={{ color: "rgb(6 104 143)", fontSize: "14px" }}>{item.name}</div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <button className="report-button mb-4">
                    OTHER
                </button>
                <button className="report-button mb-4">
                    ROOM No
                </button>

                <div className="form-floating mb-4">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea" style={{ fontSize: "12px" }}>Message (Optional)</label>
                </div>
                
                <button className="report-button-active mb-4">
                    REPORT
                </button>
            </div>


            {/* 
            <FooterBar /> */}
        </>
    );
}

export default ReportIssue;

