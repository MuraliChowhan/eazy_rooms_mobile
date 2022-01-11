import './Chat.css';
import { useHistory } from "react-router-dom";
import Header from '../../header/header';

function ChatConsole() {
    const history = useHistory();

    return (
        <>
            {/* <Header /> */}
            <div className="">
                <div className="d-flex align-items-center mb-4"
                    style={{
                        padding: "14px", background: "rgba(59, 114, 237, 0.5)",
                        borderRadius: "19px 19px 0px 0px"
                    }}>
                    <img src="./icons/arrow-left.png"
                        className="cursor-pointer"
                        width="18px" height="18px"
                        style={{ marginRight: "10px" }}
                        onClick={() => history.goBack()}
                    />
                    <img src="./icons/chatprofile.png" width="35px" height="35px" />
                    <div className="chating-user" style={{ marginLeft: "10px" }}>Reception</div>
                </div>
                <div className="p-4">
                    <div className="d-flex justify-content-end">
                        <div className="message-sent">HI</div>
                    </div>
                    <div className="d-flex justify-content-start">
                        <div className="message-receive">Hi...hwu??</div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="message-sent">HI</div>
                    </div>
                    <div className="d-flex justify-content-start">
                        <div className="message-receive">Hi...hwu??</div>
                    </div>

                    <div className="input-group formborder-color custom-rounded mb-3"
                        style={{ position: "relative", top: "194px", bottom: "0px" }}>
                        <input
                            type="text"
                            placeholder="Message"
                            className="form-control border-0" />
                        <span className="input-group-text bg-transparent border-0" id="basic-addon2">
                            <i className="far fa-paper-plane cursor-pointer"></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatConsole;
