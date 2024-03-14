import React from "react";
import "../index.css"
import loginimg from "../images/loginimg.png"
import placingorderimg from "../images/placingorderimg.jpg"
import cancellingorderimg from "../images/cancellingorderimg.jpg"
import refundimg from "../images/refundimg.jpg"
export default function Mainhelpcentercom(){
    const [registerdetails,setlogins]=React.useState({search: ""})
    function handlechange(event){
        const {value,name,type,checked}=event.target
        setlogins(prevregisters=>{
            return {...prevregisters,
            [name]:value
        }})
    }

    return(
        <div>
        <div className="helpcenterbox1">
            <div className="flexrowhelpcenter">
                <div className="Headinghelpcenter">Hi, how can we help?</div>
                <div>
                <form action="/helpcenterinfo">
                <div className="search1">
                    <div className="searchingcir"><span className="searchicon1 material-symbols-outlined">search</span></div>
                <input className="searchinput1" type="search"value={registerdetails.search} name="search" onChange={handlechange} placeholder="Search how-tos and more"></input>
                </div></form>
                </div>
            </div>
            
        </div>
        <div className="helpcenterbox2">
        <div className="flexrowhelpcenter1">
           <div className="Headinghelpcenter1">Guides for getting started</div>
        </div>
        <div className="flexcolhelpcenter1">
            <div><a href="#"><img className=" helpcenterimg"src={loginimg} />Getting started with VSavvy</a></div>
            <div><a href="#"><img className=" helpcenterimg"src={placingorderimg} />How to place an order</a></div>
            <div><a href="#"><img className=" helpcenterimg"src={cancellingorderimg} />How to cancel an order</a></div>
            <div><a href="#"><img className=" helpcenterimg"src={refundimg} />Steps to get refund</a></div>
        </div>
        
    </div>
    </div>
        
    )
}