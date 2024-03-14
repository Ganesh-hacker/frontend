import React, { useEffect, useState } from "react";
import Carteditems from "./Carteditems";
import { useLocation } from "react-router-dom";

export default function Addtocartcomp() {
    const username = localStorage.getItem("username");
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [error, setError] = useState(null);
    const location = useLocation(); 

    useEffect(() => {
        fetch(`/v1/cart/${username}`)
            .then(response => response.json())
            .then(data => {
                setCartItems(data);
                calculateTotalPrice(data); 
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [username]);

    // Function to calculate total price
    const calculateTotalPrice = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.discountedPrice; 
        });
        setTotalPrice(total);
    };

    const cartItemsComponents = cartItems.map(item => (
        <Carteditems key={item.id} {...item} />
    ));

    return (
        <div className="cartbox">
            <div className="cartboxhead">
                <h2>Shopping Cart</h2>
                <p><b>Items carted</b></p>
            </div>
            <div className="cartitemsinfo">
                {cartItemsComponents}
                <h3><b>Sub-total: ₹{totalPrice.toFixed(2)} <button type="button" className="btn-buy"> buy All
                    <span><i className = "fas fa-shopping-cart"></i></span>
                </button>
                </b></h3> 
                
            </div>
        </div>
    );
}
