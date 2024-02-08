import React from "react";
import "../index.css";
export default function Registerationcomp(){
    return(
        <div class="login">
        <div class="wrapper">
            <form action="">
                <h1>Register</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" required />
                </div>
                <div class="input-box">
                    <input type="email" placeholder="E-mail" required />
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Mobile Number" required />
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Password" required />
                    <i class="bx bxs-lock-alt"></i>
                </div>
                <button type="submit" class="btn">Register</button>
                <div class="register-link">
                    <p>Already have an account? <a href="/login">    Login</a></p>
                </div>
            </form>
        </div>
    </div>
    )
}