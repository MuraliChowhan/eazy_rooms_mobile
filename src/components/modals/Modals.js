import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';
import './Modals.css';
import { MODAL_VARIABLES } from "./modalvariables";
import { useHistory } from "react-router-dom";
function RequestModals(props) {
    const history = useHistory();
    const {
        setConfirmationModal,
        params
    } = props;

    return (
        <>
            <Modal
                size="md"
                {...props}
                centered
                className="staffinfo-modal modalProperties" style={{ padding: "12px" }}>
                <Modal.Body bsPrefix centered >
                    <div className="staffinfo-modal-header-text px-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="modals-header-text mb-4">{props.params.type}</span>
                            <img alt="" style={{ cursor: "pointer" }} src="/icons/close.svg"
                            // onClick={() => setConfirm({ modal: false, modalType: '', type: '', details: '' })}
                            />
                        </div>
                    </div>

                    {props.params.type === MODAL_VARIABLES.REQUEST_CHECKOUT ? <RequestDesk setConfirmationModal={setConfirmationModal} props={props} /> : null}
                    {props.params.type === MODAL_VARIABLES.REQUEST_WIFI ? <RequestWifi /> : null}
                    {props.params.type === MODAL_VARIABLES.REQUEST_TOWELS ? <RequestTowel /> : null}
                    {props.params.type === MODAL_VARIABLES.REQUEST_ROOMCLEAN ? <CleanRoom /> : null}
                    {props.params.type === MODAL_VARIABLES.SLIPPER ? <Slippers /> : null}
                    {props.params.type === MODAL_VARIABLES.REQUEST_DESK ? <RequestDeskFirst /> : null}
                    {props.params.type === MODAL_VARIABLES.REQUEST_DESK ? <RequestDeskFirst /> : null}
                    {props.params.type === MODAL_VARIABLES.OTHER ? <OtherDetails /> : null}
                    {props.params.type === MODAL_VARIABLES.REQUEST_DENTAL_KITS ? <RequestDentalKits /> : null}
                    {props.params.type === MODAL_VARIABLES.AMENITIES ? <Amenities /> : null}

                </Modal.Body>
                {
                    props.params.type === "Amenities" ?
                        <div className="d-flex justify-content-end">
                            <button className="btn modal-cancel-btn w-50"
                                onClick={() => setConfirmationModal({ modal: false, modalType: "", type: '', details: '' })}
                            >Cancel</button>
                        </div>
                        :

                        <div className="d-flex">
                            <button className="btn modal-cancel-btn w-50"
                                onClick={() => setConfirmationModal({ modal: false, modalType: "", type: '', details: '' })}
                            >Cancel</button>
                            <div className="mx-2"></div>
                            <button className="btn modal-confirm-btn w-50"
                                onClick={(e) => {
                                    history.push({
                                        pathname: `/thankyou`,
                                        state: {
                                            data: "thankyou"
                                        }
                                    }
                                    )
                                }}
                            >Confirm</button>
                        </div>
                }
            </Modal>
        </>
    )
}

function RequestDesk(setConfirmationModal = { setConfirmationModal }) {
    return (
        <div className="modals-card-bg">
            <div className="modal-header-desc mb-4">Are you sure you want to request a front desk call?</div>
            {/* <div className="d-flex">
                <button className="btn modal-cancel-buttons"
                    onClick={() => setConfirmationModal({ modal: false, details: '' })}
                >Cancel</button>
                <div className="mx-3"></div>
                <button className="btn modal-buttons">Confirm</button>
            </div> */}
        </div>
    )
}

function RequestWifi() {
    return (
        <div className="modals-card-bg">
            <div className="modal-header-desc mb-4">Are you sure you want to wifi details?</div>
            <div className="d-flex mb-2">
                <div className="lables-names">Wifi Id:</div>
                <div className="lable-value" style={{ marginLeft: "5px" }}> Murali Chowhan:</div>
            </div>
            <div className="d-flex mb-3">
                <div className="lables-names">Password:</div>
                <div className="lable-value" style={{ marginLeft: "5px" }}>*******</div>
            </div>
            {/* <div className="d-flex justify-content-center">
                <button className="btn modal-buttons">Thank you</button>
            </div> */}
        </div>
    )
}

function RequestTowel() {
    const [active, setInactive] = useState();
    const numbersData = [
        { name: "1" },
        { name: "2" },
        { name: "3" },
        { name: "4" },
        { name: "5" },
        { name: "6" },
        { name: "7" },
        { name: "8" },
        { name: "9" }
    ]

    const onSelectTowels = (item) => {
        setInactive(item)
    }
    return (
        <div className="modals-card-bg">
            <div className="row">
                {
                    numbersData && numbersData?.map((item, index) =>
                        <div key={index} className="col-sm-12 col-md-3 col-lg-3">
                            <div className={active === item.name ? "card py-2 mb-3 text-center activeItemBg" : "inactiveItemBg card py-2 mb-3 text-center"}
                                onClick={() => onSelectTowels(item.name)}
                            >{item.name}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

function CleanRoom() {
    return (
        <div className="modals-card-bg">
            <div className="modal-header-desc mb-4">Are you sure you want to request for cleaning room?</div>
            {/* <div className="d-flex">
            <button className="btn modal-cancel-buttons"
                onClick={() => setConfirmationModal({ modal: false, details: '' })}
            >Cancel</button>
            <div className="mx-3"></div>
            <button className="btn modal-buttons">Confirm</button>
        </div> */}
        </div>
    )
}

function Slippers() {
    return (
        <div className="modals-card-bg">
            <div className="modal-header-desc mb-4">Are you sure you want to request for slipper?</div>
            {/* <div className="d-flex">
            <button className="btn modal-cancel-buttons"
                onClick={() => setConfirmationModal({ modal: false, details: '' })}
            >Cancel</button>
            <div className="mx-3"></div>
            <button className="btn modal-buttons">Confirm</button>
        </div> */}
        </div>
    )
}


function RequestDeskFirst() {
    return (
        <div className="modals-card-bg">
            <div className="modal-header-desc mb-4">Are you sure you want to request for Front desk call?</div>
            {/* <div className="d-flex">
            <button className="btn modal-cancel-buttons"
                onClick={() => setConfirmationModal({ modal: false, details: '' })}
            >Cancel</button>
            <div className="mx-3"></div>
            <button className="btn modal-buttons">Confirm</button>
        </div> */}
        </div>
    )
}

function OtherDetails() {
    return (
        <div className="modals-card-bg">
            <div className="modal-header-desc mb-4">Are you sure you wants to raise a request?</div>

        </div>
    )
}


function RequestDentalKits() {
    return (
        <div className="modals-card-bg">
            <div className="modal-header-desc mb-4">Are you sure you wants to raise a request?</div>
        </div>
    )
}

function Amenities() {
    return (
        <div className="modals-card-bg">
            <ul className="list-group mb-4">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4" style={{ fontFamily: "sans-serif", color: "#727272", fontSize: "13px" }}>
                            Location :
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8" style={{ fontFamily: "sans-serif", color: "#00", fontSize: "13px" }}>
                            <div>Madhapur, Near Image</div>
                        </div>
                    </div>

                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4" style={{ fontFamily: "sans-serif", color: "#727272", fontSize: "13px" }}>
                            Name :
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8" style={{ fontFamily: "sans-serif", color: "#000", fontSize: "13px" }}>
                            Fitness Gym
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default RequestModals;