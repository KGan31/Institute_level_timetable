import { useState } from "react";
import React from "react";
import TimeTable from "./TimeTable";
import { computeHeadingLevel } from "@testing-library/react";
const AL_Block = () => {
    const [room, setRoom] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = async(e) => {
            e.preventDefault();
            const res = await fetch('http://locahost:5000/tt' + room );
            const data = await res.json();
            console.log(data);
    }

    return (
        <div className="details">
            <h2>Enter Details</h2>
            <form onSubmit={handleSubmit}>
                <label>Room</label>
                <select
                    value = {room}
                    onChange = {(e) => setRoom(e.target.value)}
                >
                    <option value="AL201">AL201</option>
                    <option value="AL202">AL202</option>
                    <option value="LAB1A">Lab 1A</option>
                    <option value="LAB1B">Lab 1B</option>
                    <option value="LAB1C">Lab 1C</option>
                    <option value="LAB2A">Lab 2A</option>
                    <option value="LAB2B">Lab 2B</option>
                    <option value="LAB2C">Lab 2C</option>

                </select>
                <button>Submit</button>
            </form>
            <TimeTable data = {data}/>
        </div> 
        
    );
}
 
export default AL_Block;
