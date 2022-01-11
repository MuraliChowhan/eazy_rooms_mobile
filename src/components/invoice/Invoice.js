import './UserInvoice.css';
import { useHistory } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';
function UserInvoice() {
    const history = useHistory();

    return (
        <>
            <div className="p-4 invoice-header">
                <i className="fas fa-times" style={{ cursor: "pointer" }}
                    onClick={() => history.goBack()}
                ></i>

                <div className="d-flex justify-content-between align-items-center mb-2">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item breadcrumb-text"><a>Home</a></li>
                            <li className="breadcrumb-item breadcrumb-text"><a>My Account</a></li>
                        </ol>
                    </nav>
                    {/* <div className="edit-profile-tex">
                        <Dropdown>
                            <Dropdown.Toggle className="no-caret" variant="transparent" id="dropdown-basic">
                                <i className="fas fa-ellipsis-v"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="dropdonw-items-text">Top Picks</Dropdown.Item>
                                <Dropdown.Item className="dropdonw-items-text">Recommended</Dropdown.Item>
                                <Dropdown.Item className="dropdonw-items-text">Indian Meals</Dropdown.Item>
                                <Dropdown.Item className="dropdonw-items-text">Newly Launched</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div> */}
                </div>
                <div className="ml-3" style={{ marginLeft: "5px" }}>
                    <div className="hotel-name">hotel name</div>
                    <div className="invoice-number">Invoice number</div>
                </div>
                <div className="border invoice-card">
                    <div className="d-flex p-2">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="invoice-for mb-2">
                                Invoice for
                            </div>
                            <div className="invoice-username mb-2">
                                Murali Chowhan
                            </div>
                            <div className="user-address">
                                <div className="d-flex">Near Image hospital, Madhapur</div>
                                {/* <div> Sai rasheek building</div>
                                <div> B block</div> */}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="invoice-bill">
                                <div className="amount-text">Due Amount</div>
                                <div className="amount my-2"> <span className="amount-symbol">&#36;</span>199</div>

                                <div className="d-flex">
                                    <div className="dots"></div>
                                    <div className="invoice-date">
                                        Nov 2 2021
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                        ITEM
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="d-flex justify-content-end items-cost">
                            TOTAL
                        </div>
                    </div>
                </div>

                <div className="row mt-4 mb-1 align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 item-name mb-3">
                        Item name
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-right">
                        <div className="d-flex justify-content-end items-cost">
                            &#36; 199
                        </div>
                    </div>
                </div>
                <div className="quantity-items mb-4" style={{ marginLeft: "10px" }}>
                    Quantity : 2 * $10 = $199
                </div>
                <div className="row mt-4 mb-1 align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 item-name mb-3">
                        Item name
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-right">
                        <div className="d-flex justify-content-end items-cost">
                            &#36; 199
                        </div>
                    </div>
                </div>
                <div className="quantity-items mb-4" style={{ marginLeft: "10px" }}>
                    Quantity : 2 * $10 = $199
                </div>

                {/* <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="item-name">Item name</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="formborder-color" eventKey="1">
                        <Accordion.Header className="item-name formborder-color bg-transparent">Item name</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}

                <div className="bill-invoice-card border mb-4">
                    <div className="invoice-user-desc mb-3">
                        Hi Murali, have a look at the invoice for the time of your stay
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="invoice-subtotal">SUBTOTAL</div>
                        <div className="invoice-discount"> &#36; 189</div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="invoice-subtotal">Discount</div>
                        <div className="invoice-discount"> &#36; 10%</div>
                    </div>
                    <div className="d-flex justify-content-between pb-2 mb-2 border-bottom">
                        <div className="invoice-subtotal">Tax</div>
                        <div className="invoice-discount"> &#36; 5%</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="invoice-total">TOTAL</div>
                        <div className="invoice-total"> &#36; 199%</div>
                    </div>
                </div>
                <div className="pb-2"></div>
            </div>
        </>
    );
}

export default UserInvoice;
