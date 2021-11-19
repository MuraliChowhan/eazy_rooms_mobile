import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes/AppRoutes";
import Landingpage from "./components/home/homelandingpage/Landingpage";
import Notification from "./components/notifications/Notification";
import SearchBar from "./components/search/SearchBar";
import ProfileMenu from "./components/profilemenu/ProfileMenu";
import HouseKeeping from "./components/home/homelandingpage/HouseKeeping";
import Reception from "./components/home/homelandingpage/Reception";
import Accessories from "./components/home/homelandingpage/Accessories";
import Requests from "./components/home/homelandingpage/Requests";
import SpaAndSlon from "./components/home/homelandingpage/SpaAndSalon";
import RequestPlaced from "./components/home/RequestPlaced";
import ReportIssue from "./components/home/reportissues/Reportissue";
import Chat from "./components/home/chat/Chat";
import Header from "./components/header/header";
import ChatConsole from "./components/home/chat/ChatConsole";
import RoomDining from "./components/home/roomdining/RoomDining";
import RequestModals from "./components/modals/Modals";
import ModifyProfile from "./components/profilemenu/ModifyProfile";
import Store from "./components/productstore/Store";
import Product from "./components/productstore/Product";
import OrderAndRequests from "./components/ordersandrequests/OrderAndRequests";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="border custom-rounded"
            style={{ height: "100%", background: "#fff", height: "530px", overflowX: "hidden", maxWidth: "100%", overflowX: "hidden", borderRadius:"20px" }}
          >
            {/* <MainLogo /> */}
            <Router>
              <AppRoutes />
            </Router>
            <div className="p3">
              {/* <SearchBar /> */}
              {/* <Landingpage /> */}
              {/* <Notification /> */}
              {/* <ProfileMenu /> */}
              {/* <HouseKeeping /> */}
              {/* <Reception /> */}
              {/* <Accessories /> */}
              {/* <Requests /> */}
              {/* <SpaAndSlon /> */}
              {/* <RequestPlaced /> */}
              {/* <ReportIssue /> */}
              {/* <Chat /> */}
              {/* <Header /> */}
              {/* <ChatConsole /> */}
              {/* <RoomDining /> */}
              {/* <RequestModals /> */}
              {/* <ModifyProfile /> */}
              {/* <Store /> */}
              {/* <Product /> */}
              {/* <OrderAndRequests /> */}
              {/* <Cart /> */}
              {/* <RequestModals /> */}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4"></div>
      </div>
    </div>
  );
}

export default App;
