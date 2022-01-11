import { useHistory } from "react-router-dom";
import Header from "../header/header";
import './store.css';
import { Carousel } from 'react-bootstrap';
import { useState } from "react";
function Store() {
    const history = useHistory();
    const [viewCart, setViewCart] = useState(false);
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

    const appProduct = () => {
        console.log('appProduct');
        setViewCart(true);
    }
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
                        <img src="./icons/dining-image2.png"
                            className="cursor-pointer mb-3"
                            width="75px" height="75px"
                        />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text bg-transparent" id="basic-addon1">
                        <img src="./icons/search3.png"
                            className="cursor-pointer"
                            width="20px" height="20px"
                        />
                    </span>
                    <input type="text" className="form-control" placeholder="Search with menu" />
                </div>

                <div className="mb-4">
                    <div className="store-heading-text mb-3">
                        Featured
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        style={{ borderRadius: "10px" }}
                                        className="d-block w-100"
                                        src="./icons/property7.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption className="pt-0">
                                        <h6 style={{ position: "relative", top: "-30px", left: "-60px" }}>1/4</h6>
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
                                        <h6 style={{ position: "relative", top: "-30px", left: "-60px" }}>1/4</h6>
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
                                        <h6 style={{ position: "relative", top: "-30px", left: "-60px" }}>1/4</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div className="slider-desc mb-3">
                                A few lines describing the products value or importance here
                            </div>
                            <button className="btn custom-buttons"
                                onClick={(e) => {
                                    history.push({
                                        pathname: `/product`,
                                        state: {
                                            data: "product"
                                        }
                                    }
                                    )
                                }}

                            >Buy now</button>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="store-heading-text mb-3">
                        All Products
                    </div>
                    <div className="row">
                        {
                            data.map((item, index) =>
                                <div key={index} className="col-sm-12 col-md-6 col-lg-6 mb-2">
                                    <div className="card h-100" style={{ borderRadius: "15px" }}>
                                        <img className="card-img-top" src={item.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <p className="product-name mb-2">{item.name}</p>
                                            <p className="mb-2 item-cost-text"> &#36;{item.cost}</p>
                                            <button className="btn product-button">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-center add-btn-name " style={{ marginLeft: "20px" }}>ADD</div>
                                                    <div className="add-product"
                                                        onClick={appProduct}
                                                    >+</div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    viewCart ? <div className="mb-4">
                        <div className="row mx-1 product-payment-cart">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="add-cart-text align-items-center">1 Item | $120</div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="d-flex justify-content-between">
                                    <div className="add-cart-text">View Cart</div>  <img src="./icons/shopping-bag-svg.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                        :
                        null
                }
            </div>
        </>
    );
}

export default Store;
