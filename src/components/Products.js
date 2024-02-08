    import React from "react";
    import { Link, useNavigate } from "react-router-dom";
    import "../index.css"
    export default function Products(props){
        const navigate = useNavigate();
        function handleClick(){
            navigate(`/product?param1=${props.imageUrl}&param2=${props.price}&param3=${props.discountedPrice}&param4=${props.discountPersent}&brand=${props.brand}&details=${props.title}&category1=${props.topLavelCategory}&category2=${props.secondLavelCategory}&category3=${props.LavelCategory}`);
        }
        return(
            <div className="boxed">
                <div className="product-content">
                                <img className="product-img" src={props.imageUrl} />
                    </div>

                        <div className="product-info">
                            <div className="product-info-top">
                                <h2 className="sm-title">{props.brand}</h2>
                                <div className="rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <p className="product-name">{props.title}</p>
                            <p className="product-price">₹{props.discountedPrice}</p>
                            <p className="product-price actualprice">₹{props.price}</p>
                            <p className="product-price">{props.discountPersent}%off</p>
                        </div>
                        <div className="product-btns">
                                <button type="button" className="btn-buy" onClick={handleClick}> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>

                        
                        
        </div>
            
    
        )
    }