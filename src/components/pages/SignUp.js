import React from 'react';
import '../../App.css';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


const LogIn = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {username,password};
        console.log(credentials);
        if(credentials.username === 'User' && credentials.password === 'Pass')
        {
            navigate("/create");
        }
        else
        {
            alert("Invalid Credentials");
        }

        //setIsPending(true);
    };

    return ( 
        <div className="login">
            <h2>Admin Login</h2>
            <form>
                <label>Username</label>
                <input 
                type="text" 
                required
                placeholder="Username"
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input type="password"
                required
                placeholder="Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
 
export default LogIn;