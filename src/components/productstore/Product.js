import { useHistory } from "react-router-dom";
import Header from "../header/header";
import './store.css';
import { Carousel } from 'react-bootstrap';
function Product() {
    const history = useHistory();
    const data = [
        {
            name: "Chicken fry",
            cost: "90",
            image: "./icons/food-items.png"
        },
        {
            name: "Mutton fry",
            cost: "100",
            image: "./icons/food-items.png"
        },
        {
            name: "Fish fry",
            cost: "80",
            image: "./icons/food-items.png"
        },
        {
            name: "Chicken machuria",
            cost: "90",
            image: "./icons/food-items.png"
        }
    ]
    return (
        <>
            <Header />
            <div className="p-4">
                <div className="mb-4">
                    <div className="store-heading-text mb-3">
                        Featured
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        style={{ borderRadius: "10px" }}
                                        className="d-block w-100"
                                        src="./icons/property7.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption className="pt-0">
                                        <h6 style={{ position: "relative", top: "-120px", left: "-120px" }}>1/4</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ borderRadius: "10px" }}
                                        className="d-block w-100"
                                        src="./icons/property8.jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption className="pt-0">
                                        <h6 style={{ position: "relative", top: "-120px", left: "-120px" }}>1/4</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ borderRadius: "10px" }}
                                        className="d-block w-100"
                                        src="./icons/property9.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption className="pt-0">
                                        <h6 style={{ position: "relative", top: "-120px", left: "-120px" }}>1/4</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="product-name-text mb-3">
                                Chicken Fry
                            </div>
                            <div className="slider-desc mb-4">
                                A few lines describing the products value or importance here
                            </div>
                            <button className="btn custom-buttons"
                                onClick={(e) => {
                                    history.push({
                                        pathname: `/thankyou`,
                                        state: {
                                            data: "thankyou"
                                        }
                                    }
                                    )
                                }}
                            >Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
