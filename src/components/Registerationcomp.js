import React from "react";
import "../index.css";

export default function Registerationcomp() {
    const [registerdetails, setRegisterDetails] = React.useState({ name: "", email: "", mno: "", password: "" });

    function handleChange(event) {
        const { value, name } = event.target;
        setRegisterDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerdetails),
            });

            if (response.ok) {
                window.location.href = '/successful';
            } else {
                window.location.href = '/urexist';
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    return (
        <div className="login">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="name"
                            value={registerdetails.name}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            value={registerdetails.email}
                            onChange={handleChange}
                            placeholder="E-mail"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="mno"
                            value={registerdetails.mno}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            value={registerdetails.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
