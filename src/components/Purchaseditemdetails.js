import React from "react";;
export default function Purchaseditemdetails(props){
    
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
                <button type="button" className="btn-buy"> Track me
                    <span><i className = "fas fa-shopping-cart"></i></span>
                </button>
               
                </div>
            </div>
        </div>
    )
}