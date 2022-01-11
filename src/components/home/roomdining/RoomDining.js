import { useHistory } from "react-router-dom";
import Header from "../../header/header";
import './recommended.css';
import { Dropdown } from 'react-bootstrap';

function RoomDining() {
    const history = useHistory();

    return (
        <>
            <Header />
            <div className="p-4">
                <div className="row mb-4 border-bottom">
                    <div className="cols-sm-12 col-md-6 col-lg-6">
                        <div className="room-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div className="cols-sm-12 col-md-6 col-lg-6 text-center">
                        <img src="./icons/menu-logo.gif"
                            className="cursor-pointer mb-3"
                            width="75px" height="75px"
                        />
                    </div>
                </div>
                <div className="input-group formborder-color mb-3">
                    <span className="input-group-text bg-transparent " id="basic-addon1">
                        <img src="./icons/search3.png"
                            className="cursor-pointer"
                            width="20px" height="20px"
                        />
                    </span>
                    <input type="text" className="form-control " placeholder="Search with menu" />
                </div>
                {/* <input type="text" className="form-control" placeholder="Search with menu" /> */}
                <div className="row mb-4">
                    <div className="col-sm-12 col-md-4 col-lg-4 align-items-center">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label class="form-check-label switch-btn-lable" for="flexSwitchCheckChecked">Non</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <div className="form-check form-switch align-items-center">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label className="form-check-label switch-btn-lable" for="flexSwitchCheckChecked">Non Veg</label>
                        </div>
                    </div>
                </div>

                <div className="recommended mb-4">
                    Recommended
                </div>

                <div className="row mb-2">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="food-item-name mb-3">Fish fry</div>
                        <div className="food-item-price"> &#8377; 300</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 cursor-pointer"
                        onClick={(e) => {
                            history.push({
                                pathname: `/store`,
                                state: {
                                    data: "store"
                                }
                            }
                            )
                        }}
                    >
                        <img src="./icons/food-item.png" className="pb-2" />
                        <div className="add-to-cart-btn text-center">ADD + </div>
                    </div>
                </div>
                <div className="recommended mb-4">
                    Veg
                </div>

                <div className="row mb-2">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="food-item-name mb-3">Fish fry</div>
                        <div className="food-item-price"> &#8377; 300</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="./icons/food-item.png" className="pb-2" />
                        <div className="add-to-cart-btn text-center">ADD + </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center formborder-color">
                    <div className="edit-profile-tex">
                        <Dropdown>
                            <Dropdown.Toggle className="no-caret p-0" variant="transparent" id="dropdown-basic">

                                <div className="browse-menu"><i className="fas fa-utensils" style={{ marginRight: "6px" }}></i> Browse menu</div>

                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className="dropdonw-items-text"
                                    onClick={(e) => {
                                        history.push({
                                            pathname: `/store`,
                                            state: {
                                                data: "store"
                                            }
                                        }
                                        )
                                    }}
                                >Top Picks</Dropdown.Item>
                                <Dropdown.Item className="dropdonw-items-text"
                                    onClick={(e) => {
                                        history.push({
                                            pathname: `/store`,
                                            state: {
                                                data: "store"
                                            }
                                        }
                                        )
                                    }}
                                >Recommended</Dropdown.Item>
                                <Dropdown.Item className="dropdonw-items-text"
                                    onClick={(e) => {
                                        history.push({
                                            pathname: `/store`,
                                            state: {
                                                data: "store"
                                            }
                                        }
                                        )
                                    }}
                                >Indian Meals</Dropdown.Item>
                                <Dropdown.Item className="dropdonw-items-text"
                                    onClick={(e) => {
                                        history.push({
                                            pathname: `/store`,
                                            state: {
                                                data: "store"
                                            }
                                        }
                                        )
                                    }}
                                >Newly Launched</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>


                <div className="recommended mb-4">
                    Non Veg
                </div>

                <div className="row mb-2">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="food-item-name mb-3">Fish fry</div>
                        <div className="food-item-price"> &#8377; 300</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="./icons/food-item.png" className="pb-2" />
                        <div className="add-to-cart-btn text-center">ADD + </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomDining;
