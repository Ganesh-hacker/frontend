import React from "react";
import "../index.css";
import logoimg from "../images/logo.png"
export default function Header(){
    return(
        <div className="menu-bar">
      <a href="/"> <img className="logo" src={logoimg}  /></a> 
        <ul>
            <li><a href="/">Home</a></li>
            <li><a >Men <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-menu">
                    <ul>
                        <li><a href="/men/shirts">Shirts</a></li>
                        <li><a href="/men/pants">Pants</a></li>
                        <li><a href="/men/kurtas">Kurtas</a></li>
                    </ul>
                </div>
            </li>
            <li><a >Women <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-menu">
                    <ul>
                        <li><a href="/women/kurta">Kurtis</a></li>
                        <li><a href="/women/tops">Tops</a></li>
                        <li><a href="/women/lengha">Lengha</a></li>
                        <li><a href="/women/jeans">Jeans</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="./profile"><i className="glyphicon glyphicon-user"></i></a>
            </li>
            <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
        </ul>
    </div>
    )
}