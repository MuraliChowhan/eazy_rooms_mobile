import React from "module";
import { useHistory } from "react-router-dom";
function Header() {
    const history = useHistory();

    function openNav() {
        document.getElementById("main").style.marginLeft = "19%";
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("mySidebar").style.display = "block";

        var hideText, i;
        hideText = document.querySelectorAll("#textHide");

        for (i = 0; i < hideText.length; i++) {
            hideText[i].style.display = "block";
        }
    }

    function closeNav() {
        document.getElementById("sidebarTexts").style.display = "none";
        document.getElementById("main").style.marginLeft = "80px";
        document.getElementById("mySidebar").style.width = "75px";
        document.getElementById("openNav").style.display = "inline-block";

        var hideText, i;
        hideText = document.querySelectorAll("#textHide");
        for (i = 0; i < hideText.length; i++) {
            hideText[i].style.display = "none";
        }
    }

    return (
        <>
            <div className="d-flex justify-content-between p-4 pb-3 border-bottom" style={{ background: "#F2F4F8" }}>
                <img src="./logo-svg.svg" className="cursor-pointer" width="60%" alt="logo"
                    onClick={(e) => {
                        history.push({
                            pathname: `/home`,
                            state: {
                                data: "home"
                            }
                        }
                        )
                    }}
                />
                <div className="d-flex">
                    <img src="./icons/search-svg.svg" className="cursor-pointer" width="18px" height="18px"
                        onClick={(e) => {
                            history.push(
                                `/search`
                            )
                        }}
                    />
                    <img src="./icons/bell-svg.svg" className="cursor-pointer mx-2" width="18px" height="18px"
                        onClick={(e) => {
                            history.push({
                                pathname: `/notifications`,
                                state: {
                                    data: "notifications"
                                }
                            }
                            )
                        }}
                    />
                    <img id="textHide" src="./icons/menu-svg.svg" className="cursor-pointer" width="18px" height="18px"
                        onClick={(e) => {
                            history.push({
                                pathname: `/profile`,
                                state: {
                                    data: "profile"
                                }
                            }
                            )
                        }}
                    />
                </div>
            </div>

        </>
    );
}

export default Header;

