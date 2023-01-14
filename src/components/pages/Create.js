import React,{Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [classroom, setClassroom] = useState('');
    const [capacity, setCapacity] = useState('');
    // const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e) => { 
        e.preventDefault();
        const data = {classroom, capacity};
        setIsPending(true);
        const response = await fetch('http://localhost:5000/tt',{
            method: 'Post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/');
        })

    }  

    return (  
        <Fragment>
        <div className="create">
            <h2>Add a New Event</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter Class</label>
                <input 
                type="text"  
                required
                value = {classroom}
                onChange = {(e) => setClassroom(e.target.value)}
                />
                {/* <label >Event Description:</label>
                <textarea 
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}
                ></textarea> */}
                {/* <label>Committee:</label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="Technovanza">Technovanza</option>
                    <option value="Rangawardhan">Rangawardhan</option>
                    
                    <option value="Pratibimb">Pratibimb</option>
                    <option value="E-Cell">E-Cell</option>
                    <option value="DLA">DLA</option>
                    <option value="COC">COC</option>
                    <option value="SRA">SRA</option>
                    
                </select> */}
                <label>Enter Capacity</label>
                <input 
                type="number"  
                required
                value = {capacity}
                onChange = {(e) => setCapacity(e.target.value)}
                />
                {!isPending && <button>Add Event</button>}
                {isPending && <button disabled>Adding Event....</button>}
                
            </form>
        </div>
        </Fragment>
    );
}
 
export default Create;