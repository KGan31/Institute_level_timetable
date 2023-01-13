import React from 'react';
import '../../App.css';
import { useState } from "react";


const LogIn = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {username,password};

        //setIsPending(true);

        console.log(credentials);
    }

    return ( 
        <div className="login">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                type="text" 
                required
                placeholder="Username"
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input type="text"
                required
                placeholder="Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default LogIn;