import "./SearchBar.css";
import { useHistory } from "react-router-dom";
function SearchBar() {
    const history = useHistory();
    return (
        <>
            <div className="p-4 mb-3">
                <img src="./icons/arrow-left.png" className="cursor-pointer mb-3" width="18px" height="18px"
                    onClick={() => history.goBack()}
                />
                <input type="text" className="form-control border-0 mb-4" placeholder="what are you looking for?" />


                <div className="search-history-text">
                    Search history :
                </div>
            </div>
        </>
    );
}

export default SearchBar;
