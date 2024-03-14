import React from "react";
import "../index.css";
import logoimg from "../images/logo.png"
export default function Helpcenternav(){
    return(
        <div className="menu-bar">
      <a href="/"> <img className="logo" src={logoimg}  /></a> 
      <span style={{color:"white" ,marginRight:"650px",fontSize:"20px",width:'auto',fontWeight:'bold',opacity:' 0.5', cursor:'pointer'}}>Help Center</span>
      
      <ul>
            <li><a href="./profile"><i className="glyphicon glyphicon-user"></i></a>
                <div class="dropdown-menu">
                    <ul>
                        <li><a href="/women/kurta">Your profile</a></li>    
                        <li><a href="/women/jeans">Log out</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
        </ul>
    </div>
    )
}