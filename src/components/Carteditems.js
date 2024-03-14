import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
export default function Carteditems(props){
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            const response = await fetch(`/cart/${props.id}/${localStorage.getItem('username')}`, {
                method: "DELETE",
            });
            if (response.ok) {
                window.location.href = "/cart"; 
            } else {
                console.error("Error deleting item");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };
    return(
        <div className="carteditems">
            <img src={props.imageUrl}/> 
            <div>
                <h4><b>{props.title}</b></h4>
                <p>{props.topLavelCategory}/{props.secondLavelCategory}/{props.thirdLavelCategory}</p>
                <p><b>{props.color}</b></p>
                <p><b>Style-Name:-</b></p>
            </div>
            <div>
                <h3><b>₹{props.discountedPrice}</b></h3>
                <div className="product-btns">
                <button type="button" className="btn-buy"> buy now
                    <span><i className = "fas fa-shopping-cart"></i></span>
                </button>
                <button type="button" className="btn-buy"  onClick={handleDelete}> Delete
                    <span><i className = "fas fa-cart-plus"></i></span>
                 </button>
                </div>
            </div>
        </div>
    )
}