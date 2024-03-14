import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useParams,Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import prof from "../images/profile.jpg"
import {products,addProduct} from "../Clothsinfo/cartdata";

export default function Productdetails() {
  const [backenddata, setBackendData] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation(); 

    useEffect(() => {
        const params = new URLSearchParams(location.search); 
        const id = params.get('id');

        fetch(`/v1/dresses/${id}`) 
            .then(response => response.json())
            .then(data => setBackendData(data))
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [location.search]);
    const username=localStorage.getItem("username");
    async function handlecart(event){
      event.preventDefault();
      try {
          const response = await fetch(`/addingtocart/${backenddata.id}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ ...backenddata, name: username }),
          });

          if (response.ok) {
              window.location.href = '/cart';
          } else {
              window.location.href = '/cart';
          }
      } catch (error) {
          console.error('Error registering:', error);
      }
    }
    async function handlepurch(event){
      event.preventDefault();
      try {
          const response = await fetch(`/addingtopurch/${backenddata.id}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ ...backenddata, name: username }),
          });

          if (response.ok) {
              window.location.href = '/purchased';
          } else {
              window.location.href = '/purchased';
          }
      } catch (error) {
          console.error('Error registering:', error);
      }
    }
    return (
        <div className="productbox">
            <h4 >{backenddata.topLavelCategory}/{backenddata.secondLavelCategory}/{backenddata.thirdLavelCategory}</h4><br/>
          <img src={backenddata.imageUrl}/>
          <div className="detailsbox">
            <h4 className="brands">  {backenddata.brand}</h4>
            <h4></h4>
            <p className="product-price">₹{backenddata.price}</p>
            <p className="product-price"><h3>{backenddata.discountedPrice}</h3></p>
            <p className="product-price">{backenddata.discountPersent}%off</p>
            <div className="rating">
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "far fa-star"></i></span>
             </div>
            <div className="product-btns">
                <button type="button" className="btn-buy" onClick={handlepurch} > buy now
                    <span><i className = "fas fa-shopping-cart"></i></span>
                </button>
      
               <button type="button" className="btn-buy" onClick={handlecart} > Add to cart
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