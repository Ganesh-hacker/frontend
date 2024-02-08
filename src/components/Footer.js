import React from "react";
import "../index.css";
export default function Footer(){
    return(
        <footer>
        <div class="footercontainer">
            <div class="socialicons">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-google-plus"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className="footernav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Our Team</a></li>
                </ul>
            </div>
            <div className="footerbottom">
                <p>Copyright &copy;2024; Designed by <span class="designer">YG</span></p>
            </div>
        </div>
    </footer>
    )
}