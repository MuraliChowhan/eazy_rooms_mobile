import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes/AppRoutes";
// import { Provider } from 'react-redux';
// import Store from "./components/productstore/Store";

function App() {
  return (
    // <Provider Store={Store}>
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="border custom-rounded"
            style={{ height: "100%", background: "#fff", height: "530px", overflowX: "hidden", maxWidth: "100%", overflowX: "hidden", borderRadius: "20px" }}
          >

            <Router>
              <AppRoutes />
            </Router>

          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4"></div>
      </div>
    </div>
    // </Provider>
  );
}

export default App;
