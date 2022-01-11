import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../components/home/authentication/Login";
import OtpVerification from "../components/home/authentication/Otpverification";
import KycForm from "../components/home/kycform/KycForm";
import UploadImage from "../components/home/kycform/UploadImage";
import Congratulations from "../components/home/kycform/Congratulations";
import Notification from "../components/notifications/Notification";
import SearchBar from "../components/search/SearchBar";
import ProfileMenu from "../components/profilemenu/ProfileMenu";
import Landingpage from "../components/home/homelandingpage/Landingpage";
import Accessories from "../components/home/homelandingpage/Accessories";
import Requests from "../components/home/homelandingpage/Requests";
import SpaAndSlon from "../components/home/homelandingpage/SpaAndSalon";
import Reception from "../components/home/homelandingpage/Reception";
import HouseKeeping from "../components/home/homelandingpage/HouseKeeping";
import ChatConsole from "../components/home/chat/ChatConsole";
import ReportIssue from "../components/home/reportissues/Reportissue";
import Chat from "../components/home/chat/Chat";
import UserInvoice from "../components/invoice/Invoice";
import ModifyProfile from "../components/profilemenu/ModifyProfile";
import Cart from "../components/cart/Cart";
import OrderAndRequests from "../components/ordersandrequests/OrderAndRequests";
import RoomDining from "../components/home/roomdining/RoomDining";
import RequestPlaced from "../components/home/RequestPlaced";
import Store from "../components/productstore/Store";
import Product from "../components/productstore/Product";

function AppRoutes() {
    return (
        <>
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/Otpverification" exact component={OtpVerification} />
                <Route path="/kycdetails" exact component={KycForm} />
                <Route path="/uploadimage" exact component={UploadImage} />
                <Route path="/congratulations" exact component={Congratulations} />
                <Route path="/notifications" exact component={Notification} />
                <Route path="/search" exact component={SearchBar} />
                <Route path="/profile" exact component={ProfileMenu} />
                <Route path="/home" exact component={Landingpage} />
                <Route path="/acceessories" exact component={Accessories} />
                <Route path="/request" exact component={Requests} />
                <Route path="/spaandsalon" exact component={SpaAndSlon} />
                <Route path="/reception" exact component={Reception} />
                <Route path="/housekeeping" exact component={HouseKeeping} />
                <Route path="/chatconsole" exact component={ChatConsole} />
                <Route path="/reportissue" exact component={ReportIssue} />
                <Route path="/chat" exact component={Chat} />
                <Route path="/invoice" exact component={UserInvoice} />
                <Route path="/edit" exact component={ModifyProfile} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/orderandrequests" exact component={OrderAndRequests} />
                <Route path="/dining" exact component={RoomDining} />
                <Route path="/thankyou" exact component={RequestPlaced} />
                <Route path="/store" exact component={Store} />
                <Route path="/product" exact component={Product} />
            </Router>
        </>
    );
}

export default AppRoutes;
