import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Purchaseditemdetails from "../components/Purchaseditemdetails";

export default function Addtopurchcomp() {
    const username = localStorage.getItem("username");
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [error, setError] = useState(null);
    const location = useLocation(); 

    useEffect(() => {
        fetch(`/v1/purch/${username}`)
            .then(response => response.json())
            .then(data => {
                setCartItems(data);
              
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [username]);
    const cartItemsComponents = cartItems.map(item => (
        <Purchaseditemdetails key={item.id} {...item} />
    ));
  return (
    <div className="cartbox">
    <div className="cartboxhead">
        <h2>Your purchases</h2>
        <p><b>Items carted</b></p>
    </div>
    <div className="cartitemsinfo">
        {cartItemsComponents}
       
       
    </div>
</div>
  )
}
