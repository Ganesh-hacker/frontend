import React from "react";
import ReactDOM from 'react-dom';
import { useParams,Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import prof from "../images/profile.jpg"
import { useLocation } from "react-router-dom";
import {products,addProduct} from "../Clothsinfo/cartdata";

export default function Productdetails() {
  const location = useLocation();
  const param1 = new URLSearchParams(location.search).get("param1");
  const param2 = new URLSearchParams(location.search).get("param2");
  const param3 = new URLSearchParams(location.search).get("param3");
  const param4 = new URLSearchParams(location.search).get("param4");
  const brand = new URLSearchParams(location.search).get("brand");
  const details = new URLSearchParams(location.search).get("details");
  const category1 = new URLSearchParams(location.search).get("category1");
  const category2 = new URLSearchParams(location.search).get("category2");
  const category3 = new URLSearchParams(location.search).get("category3");
  // const navigate = useNavigate();
  const [thingsArray, setThingsArray] = React.useState([{}])
  function addItem() {
    setThingsArray(prevState => { 
        const newdata= [...prevState, {p1:param1,p2:param2,p3:param3}]
        addProduct(newdata);
        return newdata
    })
}
console.log(thingsArray)
console.log(products)
    return (
        <div className="productbox">
            <h4 >{category1}/{category2}/{category3}</h4><br/>
          <img src={param1}/>
          <div className="detailsbox">
            <h4 className="brands">  {brand}</h4>
            <h4>{details}</h4>
            <p className="product-price">₹{param2}</p>
            <p className="product-price"><h3>₹{param3}</h3></p>
            <p className="product-price">{param4}%off</p>
            <div className="rating">
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "far fa-star"></i></span>
             </div>
            <div className="product-btns">
                <button type="button" className="btn-buy"> buy now
                    <span><i className = "fas fa-shopping-cart"></i></span>
                </button>
      
                <button type="button" className="btn-buy" onClick={addItem}> Add to cart
                    <span><i className = "fas fa-cart-plus"></i></span>
                 </button>
            </div>
            <div className="flexingbox">
              <h5 className="fas fa-tag"> </h5> <h5> A traditional garment embodying elegance and grace.</h5>
              <h5 className="fas fa-tag"></h5><h5>Crafted from fine fabrics, it features intricate embroidery and a relaxed fit.</h5>
              <h5 className="fas fa-tag"></h5><h5> Providing comfort and style.</h5>
            </div>
                         
          </div>
        </div>
    )
}