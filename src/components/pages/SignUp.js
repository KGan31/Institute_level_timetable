import React from 'react';
import '../../App.css';
import { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { toast } from 'react-toastify';

const LogIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const handleLogin = () => {

        // If login is successful, call the login function from the context
        context.login();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {
            email: email,
            password: password
        };
        
        //post request to backend and submitting the credentials for auth check
        fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        }).then(res =>{
            if(!res.ok)
            {
                throw Error("could not fetch");
            }

            return res.json();
        })
        .then(res => {
            // navigate(Home)
            toast.success("Login Successfull!!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false
            });
            const token = res.accessToken;
            // const role = res.role;
            localStorage.setItem("token", token);
            // localStorage.setItem("role", role);
            // console.log(res);
            navigate("/events");
            handleLogin();
        })
        .catch(err => {
            console.log(err);
            
                toast.error("Incorrect email or password", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false
                });
            
        })       
    };

    return ( 
        <div className="login">
            <h2>Admin Login</h2>
            {/* // handleSubmit should be invoked in the form tag and not on the Submit button
            // invoking handleSubmit on Submit button will prevent the browser's default action and will not check whether or not all
            // the input fields are filled or not */}
            <form onSubmit={handleSubmit}> 

                <label>Email</label>
                <input 
                    type="email" 
                    required
                    placeholder="Email"
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    type="password"
                    required
                    placeholder="Password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button type="submit" className='px-2 py-2 hover:bg-[#F33A6A] transform transition duration-300 hover:scale-90 cursor-pointer rounded mt-3 bg-[#f1356d] border text-white font-bold' >Submit</button>
            </form>
        </div>
    );
}
 
export default LogIn;